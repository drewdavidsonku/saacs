package main

import (
	// "fmt"
	//
	"strings"

	"github.com/nova38/thesis/lib/gen/go/key"
	"golang.org/x/text/cases"
	"golang.org/x/text/language"
	"google.golang.org/protobuf/compiler/protogen"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/dynamicpb"
)

// This will check the for the existence of an extension on the message that defines the namespace value and the key field

func main() {
	protogen.Options{}.Run(func(gen *protogen.Plugin) error {
		for _, f := range gen.Files {
			if f.Generate {
				generateFile(gen, f)
			}
		}
		return nil
	})
}

func generateFile(gen *protogen.Plugin, file *protogen.File) *protogen.GeneratedFile {
	filename := file.GeneratedFilenamePrefix + ".cckey.pb.go"
	g := gen.NewGeneratedFile(filename, file.GoImportPath)

	g.P("// Code generated by protoc-gen-cckey. DO NOT EDIT.")
	g.P("// versions:")
	g.P("// - protoc-gen-cckey v0.0.1")
	g.P("// source: ", file.Desc.Path())
	g.P()
	g.P("package ", file.GoPackageName)
	g.P()

	// g.Import("errors")
	for _, message := range file.Messages {

		generateMessage(gen, g, message)

	}

	return g
}

// interate recursively through the messages and write a function for each message
// that will return the key and the namespace for that message

func generateMessage(gen *protogen.Plugin, g *protogen.GeneratedFile, msg *protogen.Message) {

	g.P("// ", msg.GoIdent.GoName, " is a generated protocol buffer message")

	for _, ext := range msg.Extensions {
		g.P("// ", ext.GoName, " is an extension of ", msg.GoIdent.GoName)
	}

	key_schema := KeySchemaOptions(msg)
	if key_schema == nil {
		return
	}

	// // g.P(msg.Desc.Fields().ByNumber(0).Name())

	ns := key_schema.GetNamespace()
	kp := key_schema.GetKeyPaths()

	// function for namespace
	g.P("// ", ns, " is the namespace for ", msg.GoIdent.GoName)
	g.P("func (m *", msg.GoIdent.GoName, ") Namespace() string {")
	g.P("	return \"", ns, "\"")
	g.P("}")

	// function for key
	new_msg := dynamicpb.NewMessage(msg.Desc)
	// g.P("// ", ns, " is the namespace for ", msg.GoIdent.GoName)
	// // g.P("// ", kp, " is the key for ", message.GoIdent.GoName)

	if kp.IsValid(new_msg) {

		raw_paths := kp.GetPaths()

		// for _, path := range raw_paths {
		// 	subPaths := toSubPaths(path)
		// 	for _, subPath := range subPaths {
		// 		g.P("// ", subPath, " is the key for ", msg.GoIdent.GoName)
		// 	}
		// }
		g.QualifiedGoIdent(protogen.GoIdent{GoName: "errors", GoImportPath: "errors"})
		g.QualifiedGoIdent(protogen.GoIdent{GoName: "lo", GoImportPath: "github.com/samber/lo"})

		g.P("func (m *", msg.GoIdent.GoName, ") ", "Key()", "([]string, error) {")
		g.P("attr := []string{}")

		g.P("ok := lo.Try(func () error {")

		for _, f := range raw_paths {
			g.P("attr = append(attr, m.", PathToGetter(f), ")")
		}
		g.P("return nil")
		g.P("})")

		g.P("if !ok {")
		g.P("return nil, errors.New(\"Key is nil\")}")
		g.P("return attr, nil")
		g.P("}")
	} else {
		g.P("//Invalid key path")
		// gen.Error(fmt.Errorf("Invalid key path"))
	}

	for _, nestedMessage := range msg.Messages {
		generateMessage(gen, g, nestedMessage)
	}

}

func KeySchemaOptions(m *protogen.Message) *key.KeySchema {
	v, ok := proto.GetExtension(m.Desc.Options(), key.E_KeySchema).(*key.KeySchema)
	if !ok {
		return nil
	}
	return v
}

// paths split by their dot notation
func toSubPaths(raw_paths string) []string {
	p := []string{}
	subPaths := strings.Split(raw_paths, ".")
	for _, path := range subPaths {
		sections := strings.Split(path, ".")
		for _, section := range sections {
			p = append(p, section)
		}
	}
	return p
}

func snakeToCamel(s string) string {
	sections := strings.Split(s, "_")
	for i, section := range sections {
		sections[i] = cases.Title(language.Und).String(section)
	}
	return strings.Join(sections, "")
}

func PathToGetter(path string) string {

	subPaths := toSubPaths(path)

	first_time := true
	str := ""
	for _, subPath := range subPaths {
		if !first_time {
			str += "."
		}
		str += "Get"

		// Convert the string from snake case to camel case
		sections := strings.Split(subPath, "_")

		for _, section := range sections {

			str += cases.Title(language.Und).String(section)
		}
		str += "()"
		first_time = false
	}
	return str
}

package generators

import (
	"strings"

	pb "github.com/nova38/saacs/pkg/saacs-protos/saacs/common/v0"
	"golang.org/x/text/cases"
	"golang.org/x/text/language"
	"google.golang.org/protobuf/compiler/protogen"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/reflect/protoreflect"

	"google.golang.org/protobuf/types/dynamicpb"
)

const (
	// errorsPackage  = protogen.GoImportPath("errors")
	// loPackage      = protogen.GoImportPath("github.com/samber/lo")
	// stringsPackage = protogen.GoImportPath("strings")

	authPackage = protogen.GoImportPath(
		"github.com/nova38/saacs/pkg/saacs-protos/saacs/auth/v0",
	)
	pbPackage = protogen.GoImportPath("github.com/nova38/saacs/pkg/saacs-protos/saacs/common/v0")

	stringspkg         = protogen.GoImportPath("strings")
	fieldmaskpbPackage = protogen.GoImportPath("google.golang.org/protobuf/types/known/fieldmaskpb")
	// protoreflectPackage = protogen.GoImportPath("google.golang.org/protobuf/reflect/protoreflect")
	registryPackage = protogen.GoImportPath("google.golang.org/protobuf/reflect/protoregistry")
)

type KeyGenerator struct{}

func (kg *KeyGenerator) GenerateFile(
	gen *protogen.Plugin,
	file *protogen.File,
) (*protogen.GeneratedFile, error) {
	filename := file.GeneratedFilenamePrefix + ".cc.key.pb.go"
	g := gen.NewGeneratedFile(filename, file.GoImportPath)

	// Generate the header
	g.P("// Code generated by protoc-gen-go-hlf. DO NOT EDIT.")
	g.P("// versions:")

	g.P("// - protoc-gen-cckey v0.0.1")
	g.P("// source: ", file.Desc.Path())
	g.P()
	g.P("package ", file.GoPackageName)
	g.P()

	v := true
	for _, msg := range file.Messages {
		b := kg.GenerateMessage(gen, g, msg)
		v = v && b
	}

	if v {
		g.P("// No key schema found. Skipping file.")
		g.Skip()
	}

	return g, nil
}

// Handle the messages
func (kg *KeyGenerator) GenerateMessage(
	gen *protogen.Plugin,
	g *protogen.GeneratedFile,
	msg *protogen.Message,
) (notUsed bool) {
	keySchema := KeySchemaOptions(msg)
	ItemKind := g.QualifiedGoIdent(pbPackage.Ident("ItemKind"))
	KeySchemaImport := g.QualifiedGoIdent(pbPackage.Ident("KeySchema"))
	FieldMask := g.QualifiedGoIdent(fieldmaskpbPackage.Ident("FieldMask"))
	stringJoin := g.QualifiedGoIdent(stringspkg.Ident("Join"))

	// ItemKind := GetItemKind(msg)
	if keySchema == nil || keySchema.GetProperties() == nil {
		return true
	}

	if !keySchema.GetProperties().IsValid(dynamicpb.NewMessage(msg.Desc)) {
		g.P("// Invalid Key Schema")
		g.P("// ", keySchema.GetProperties())
		return true
	}

	g.P()
	g.P("// ──────────────────────────────────────────────────")
	g.P("// ", msg.Desc.FullName())

	switch pb.ItemKind(keySchema.GetItemKind().Number()) {
	case pb.ItemKind_ITEM_KIND_PRIMARY_ITEM:
		g.P("// Primary Item")
		g.P()

		GeneratePrimaryItem(gen, g, msg)
	case pb.ItemKind_ITEM_KIND_SUB_ITEM:
		g.P("// Sub Item")
		g.P()

		GenerateSubItem(gen, g, msg)
	}

	g.P("func (m *", msg.GoIdent.GoName, ") ", "ItemKind()", ItemKind, "{")
	g.P("return ", ItemKind, "_", pb.ItemKind(keySchema.GetItemKind().Number()))
	g.P("}")
	g.P()

	g.P("func (m *", msg.GoIdent.GoName, ") ItemType() string {")
	g.P("	return \"", msg.Desc.FullName(), "\"")
	g.P("}")
	g.P()

	// Return the key schema
	g.P("func (m *", msg.GoIdent.GoName, ") ", "KeySchema()", "(*", KeySchemaImport, ") {")
	g.P("return &", KeySchemaImport, "{")
	g.P("ItemKind: ", ItemKind, "_", pb.ItemKind(keySchema.GetItemKind().Number()), ",")

	if keySchema.GetProperties().GetPaths() != nil &&
		len(keySchema.GetProperties().GetPaths()) > 0 {
		for i, f := range keySchema.GetProperties().GetPaths() {

			switch {
			case i == 0 && len(keySchema.GetProperties().GetPaths()) == 1:
				g.P("Properties: &", FieldMask, "{ Paths: []string{\"", f, "\"}},")
			case i == 0:
				g.P("Properties: &", FieldMask, "{ Paths: []string{")
				g.P("\"", f, "\",")
			default:
				g.P("\"", f, "\",")
			}

		}
		if len(keySchema.GetProperties().GetPaths()) > 1 {
			g.P("}},")
		}
	} else {
		g.P("Properties: &", FieldMask, "{ Paths: []string{}},")

	}

	g.P("}")
	g.P("}")
	g.P("")

	{
		ItemKey := g.QualifiedGoIdent(pbPackage.Ident("ItemKey"))
		g.P(`
            // NewFromKey - Creates a new item from a key
            func (m *`, msg.GoIdent.GoName, `) NewFromKey(key *`, ItemKey, `)  (* `, msg.GoIdent.GoName, `) {
                item := &`, msg.GoIdent.GoName, `{}
                item.SetKey(key)

                return item
            }


        `)

	}

	// Generate Composite Key for storage in the ledger

	g.P(`
    // StateKey - Returns a composite key for the state
    // This follows the same structure as the saacs-cc stub library,
    // Main difference is that it doesn't check the key for invalid characters
    //
    // Example key:= "\u0000auth.Collection\u0000collection0\u0000collection0\u0000"

    func (m *`, msg.GoIdent.GoName, `)  StateKey() (string) {



        const sep = string(rune(0))

        attrs := m.ItemKey().GetItemKeyParts()
        if attrs == nil { panic("ItemKeyParts is nil")}

        collectionId := m.ItemKey().GetCollectionId()
        if collectionId == "" { panic("CollectionId is nil") }

        if len(attrs) == 0 {
            k :=  sep + "`, msg.Desc.FullName(), `"+ sep + collectionId + sep
            return k
        }
        k :=  sep + "`, msg.Desc.FullName(), `"+ sep + collectionId + sep + `, stringJoin, `(attrs, sep)  + sep

        return k
    }
    `)

	return false
}

func GeneratePrimaryItem(
	gen *protogen.Plugin,
	g *protogen.GeneratedFile,
	msg *protogen.Message,
) {

	ItemKey := g.QualifiedGoIdent(pbPackage.Ident("ItemKey"))
	keySchema := KeySchemaOptions(msg)

	{
		g.P("// Domain Item")
		g.P("func (m *", msg.GoIdent.GoName, ") ", "SetKey", "(key *", ItemKey, ") {")
		g.P("m.SetKeyAttr(key.ItemKeyParts)")
		g.P("m.CollectionId = key.GetCollectionId()")
		g.P("return")
		g.P(" }")
		g.P()
	}

	{
		g.P("// SetKeyAttr - Sets the key attributes, returns the number of extra attributes ")
		g.P("func (m *", msg.GoIdent.GoName, ") ", "SetKeyAttr", "(attr []string) int {")
		for i, f := range keySchema.GetProperties().GetPaths() {
			field := msg.Desc.Fields().ByName(protoreflect.Name(f))

			if field == nil {
				continue
			}

			g.P("if len(attr) > ", i, " {")
			g.P("m.", PathToSet(f), " = attr[", i, "]")
			g.P("} else{ return 0 }")

		}

		g.P("return len(attr) - ", len(keySchema.GetProperties().GetPaths()))
		g.P("}")
		g.P()
	}

	{
		g.P("func (m *", msg.GoIdent.GoName, ") ", "ItemKey()", "(*", ItemKey, ") {")
		g.P("key := &", ItemKey, "{")
		g.P("CollectionId: m.GetCollectionId(),")
		g.P("ItemKind: ", pb.ItemKind_ITEM_KIND_PRIMARY_ITEM.Number(), ",")
		g.P("ItemType: \"", string(msg.Desc.FullName()), "\",")
		g.P("ItemKeyParts: m.KeyAttr(),")
		g.P("}")
		g.P("return key")
		g.P("}")
		g.P()
	}

	{
		g.P("func (m *", msg.GoIdent.GoName, ") ", "KeyAttr()", "[]string {")
		g.P("attr := []string{}")

		for _, f := range keySchema.GetProperties().GetPaths() {
			field := msg.Desc.Fields().ByName(protoreflect.Name(f))

			if field == nil {
				continue
			}
			if field.IsList() {
				g.P("//", f, "is a list")
				g.P("attr = append(attr, m.", PathToGetter(f), "...)")
			} else {
				g.P("attr = append(attr, m.", PathToGetter(f), ")")
			}

		}

		g.P("return attr")
		g.P("}")
		g.P()
	}

}

func GenerateSubItem(
	gen *protogen.Plugin,
	g *protogen.GeneratedFile,
	msg *protogen.Message,
) {

	g.Import("google.golang.org/protobuf/reflect/protoreflect")
	ItemKey := g.QualifiedGoIdent(pbPackage.Ident("ItemKey"))
	// ItemInterface := g.QualifiedGoIdent(authPackage.Ident("ItemInterface"))
	GlobalTypes := g.QualifiedGoIdent(registryPackage.Ident("GlobalTypes"))
	KeySchemaImport := g.QualifiedGoIdent(pbPackage.Ident("KeySchema"))
	// ProtoRegImport := g.QualifiedGoIdent(protoreflectPackage.Ident("protoreflect"))
	ProtoReflectPackage := g.QualifiedGoIdent(
		protogen.GoIdent{GoImportPath: "google.golang.org/protobuf/reflect/protoreflect"},
	)
	// ProtoReflect := g.QualifiedGoIdent()
	ItemKind := g.QualifiedGoIdent(pbPackage.Ident("ItemKind"))

	keySchema := KeySchemaOptions(msg)

	g.P(`
    func (m *`, msg.GoIdent.GoName, ") SetKey (key *", ItemKey, `) {
        m.PrimaryKey = key
	    return
     }
    `)

	g.P(`
    func (m *`, msg.GoIdent.GoName, `) SetKeyAttr (attr []string) int {

        type ItemInterface interface {
            KeySchema() *`, KeySchemaImport, `
        }

        if m.PrimaryKey == nil {
            m.PrimaryKey = &`, ItemKey, `{}
        }

        name := `, ProtoReflectPackage, `FullName(m.GetPrimaryKey().GetItemType())

        t, err :=`, GlobalTypes, `.FindMessageByName(name)
        if err != nil {panic(err)}

        item, ok := t.New().Interface().(ItemInterface)
        if !ok {panic("Failed to cast to item interface")}

        primarySchema := item.KeySchema()
        if primarySchema == nil {panic("Primary schema is nil")}

        primaryAttrCount := len(primarySchema.GetProperties().GetPaths())

        // just set the primary key attributes
        if len(attr) <= primaryAttrCount {
            m.GetPrimaryKey().ItemKeyParts = attr
            return len(attr) - primaryAttrCount
        }

        remaining := len(attr) - primaryAttrCount

        if remaining <= 0 { panic("There was a issue with the number of the attributes") }

        attr = attr[remaining:]
    `)
	for i, f := range keySchema.GetProperties().GetPaths() {
		field := msg.Desc.Fields().ByName(protoreflect.Name(f))

		if field == nil {
			continue
		}

		g.P("if len(attr) > ", i, " {")
		g.P("m.", PathToSet(f), " = attr[", i, "]")
		g.P("} else{ return 0 }")
	}

	g.P("return len(attr) - ", len(keySchema.GetProperties().GetPaths()), "}")

	g.P(`

    func (m *`, msg.GoIdent.GoName, `) ItemKey() (*`, ItemKey, `) {



	    key := &`, ItemKey, `{
            CollectionId: m.GetPrimaryKey().GetCollectionId(),
            ItemKind: `, ItemKind, "_", pb.ItemKind(keySchema.GetItemKind().Number()), `,
            ItemType: "`, string(msg.Desc.FullName()), `",
            ItemKeyParts: []string{
                m.GetPrimaryKey().GetItemType(),
            },
        }

        key.ItemKeyParts = append(key.ItemKeyParts, m.GetPrimaryKey().GetItemKeyParts()...)
        key.ItemKeyParts = append(key.ItemKeyParts, m.KeyAttr()...)
        return key
	}

    `)
	g.P()

	g.P(`
    func (m *`, msg.GoIdent.GoName, `) KeyAttr() []string {
	    attr := []string{}
        `,
	)

	for _, f := range keySchema.GetProperties().GetPaths() {
		field := msg.Desc.Fields().ByName(protoreflect.Name(f))

		if field == nil {
			continue
		}
		if field.IsList() {
			g.P("//", f, "is a list")
			g.P("attr = append(attr, m.", PathToGetter(f), "...)")
		} else {
			g.P("attr = append(attr, m.", PathToGetter(f), ")")
		}

	}

	g.P("return attr")
	g.P("}")
	g.P()

}

func PathToSet(path string) string {
	subPaths := toSubPaths(path)

	firstTime := true
	str := ""
	for _, subPath := range subPaths {
		if !firstTime {
			str += "."
		}

		// Convert the string from snake case to camel case
		sections := strings.Split(subPath, "_")

		for _, section := range sections {
			str += cases.Title(language.Und).String(section)
		}
		str += "()"
		firstTime = false
	}

	// remove the last ()
	if len(str) > 2 {
		str = str[:len(str)-2]
	}
	return str
}

func PathToGetter(path string) string {
	subPaths := toSubPaths(path)

	firstTime := true
	str := ""
	for _, subPath := range subPaths {
		if !firstTime {
			str += "."
		}
		str += "Get"

		// Convert the string from snake case to camel case
		sections := strings.Split(subPath, "_")

		for _, section := range sections {
			str += cases.Title(language.Und).String(section)
		}
		str += "()"
		firstTime = false
	}
	return str
}

// paths split by their dot notation
func toSubPaths(rawPaths string) []string {
	var p []string
	subPaths := strings.Split(rawPaths, ".")
	for _, path := range subPaths {
		sections := strings.Split(path, ".")
		p = append(p, sections...)
	}
	return p
}

func KeySchemaOptions(m *protogen.Message) *pb.KeySchema {
	v, ok := proto.GetExtension(m.Desc.Options(), pb.E_KeySchema).(*pb.KeySchema)

	if !ok {
		return nil
	}
	return v
}

// func GetItemKind(m *protogen.Message) *pb.ItemKind {
// 	v, ok := proto.GetExtension(m.Desc.Options(), authpb.E_ItemKind).(*pb.ItemKind)

// 	if !ok {
// 		return nil
// 	}

// 	return v
// }

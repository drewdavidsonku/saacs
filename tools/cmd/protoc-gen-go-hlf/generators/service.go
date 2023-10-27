package generators

import (
	"github.com/nova38/thesis/lib/go/gen/hlf"
	_ "github.com/nova38/thesis/lib/go/gen/hlf"
	"github.com/nova38/thesis/lib/go/gen/rbac"

	"google.golang.org/protobuf/compiler/protogen"
	"google.golang.org/protobuf/proto"
	_ "google.golang.org/protobuf/proto"

	_ "strings"

	_ "google.golang.org/protobuf/types/dynamicpb"
)

type ServiceGenerator struct{}

func (sg *ServiceGenerator) GenerateFile(
	gen *protogen.Plugin,
	file *protogen.File,
) (*protogen.GeneratedFile, error) {
	filename := file.GeneratedFilenamePrefix + ".cc.service.pb.go"
	g := gen.NewGeneratedFile(filename, file.GoImportPath)

	// Generate the header
	g.P("// Code generated by proto-gen-go-hlf. DO NOT EDIT.")
	g.P("// versions:")

	g.P("// - protoc-gen-cckey v0.0.1")
	g.P("// source: ", file.Desc.Path())
	g.P()
	g.P("package ", file.GoPackageName)
	g.P()

	//for _, msg := range file.Messages {
	//	//sv.GenerateMessage(gen, g, msg)
	//}

	if file.Services == nil {
		g.Skip()
	}

	for _, sv := range file.Services {
		// g.P("type AuthContractImpl struct{}")
		sg.GenerateService(gen, g, sv)
	}

	return g, nil
}

func (sv *ServiceGenerator) GenerateService(
	gen *protogen.Plugin,
	g *protogen.GeneratedFile,
	v *protogen.Service,
) {
	g.P("// Service ", v.GoName)

	GenerateInterface(gen, g, v)
	g.P()
	g.P()
	GenerateStruct(gen, g, v)
}

func GenerateInterface(gen *protogen.Plugin, g *protogen.GeneratedFile, v *protogen.Service) {
	ctx := g.QualifiedGoIdent(
		protogen.GoIdent{
			GoName:       "AuthTxCtx",
			GoImportPath: "github.com/nova38/thesis/lib/go/fabric/rbac",
		},
	)

	g.P("type ", v.GoName, "Interface interface{")
	defer g.P("}")

	for _, m := range v.Methods {

		mComments := m.Comments.Leading.String()

		if len(mComments) == 0 {
			// add the fn name to the comments
			mComments += "// " + m.GoName + "\n // \n"
		}

		op, ok := proto.GetExtension(m.Desc.Options(), rbac.E_Operation).(*rbac.ACL_Operation)

		if !ok {
			mComments += "// No operation defined for " + m.GoName + "\n"
		} else if op != nil {
			mComments += "// # Operation: \n"
			mComments += "//   - Domain: " + op.Domain.String() + "\n"
			mComments += "//   - Action: " + op.Action.String() + "\n"
		}

		g.P(
			mComments, m.GoName,
			"(ctx ", ctx, ", req *", m.Input.GoIdent, ") ",
			"(res *", m.Output.GoIdent, ",err error)",
		)

		g.P()
	}
}

func GenerateStruct(
	gen *protogen.Plugin,
	g *protogen.GeneratedFile,
	v *protogen.Service,
) {
	g.P("type ", v.GoName, "Base struct{")
	g.P("}")

	GenerateStructEvaluateTransactions(gen, g, v)
	g.P()
	GenerateOperationLookup(gen, g, v)
}

func GenerateStructEvaluateTransactions(
	gen *protogen.Plugin,
	g *protogen.GeneratedFile,
	v *protogen.Service,
) {
	g.P("func (s *", v.GoName, "Base) GetEvaluateTransactions() []string {")
	// g.P("return []string{")

	fns := []string{}

	for _, m := range v.Methods {
		tt, ok := proto.GetExtension(m.Desc.Options(), hlf.E_TransactionType).(hlf.TransactionType)

		if !ok {
			continue
		}

		if tt == hlf.TransactionType_TRANSACTION_TYPE_QUERY {
			fns = append(fns, m.GoName)
		}
	}
	if len(fns) == 0 {
		g.P("return []string{}")
	} else {
		g.P("return []string{")
		for _, fn := range fns {
			g.P("\"", fn, "\",")
		}
		g.P("}")
	}
	g.P("}")
}

func GenerateOperationLookup(
	gen *protogen.Plugin,
	g *protogen.GeneratedFile,
	v *protogen.Service,
) {
	opImport := g.QualifiedGoIdent(
		protogen.GoIdent{
			GoName:       "ACL_Operation",
			GoImportPath: "github.com/nova38/thesis/lib/go/gen/rbac",
		},
	)
	fmtImport := g.QualifiedGoIdent(protogen.GoIdent{GoImportPath: "fmt"})
	g.P("//")

	g.P("func ", v.GoName, "GetTxOperation(txName string)", "( op *", opImport, ", err error) {")

	g.P("switch txName {")
	for _, m := range v.Methods {
		g.P("case \"", m.GoName, "\":")
		op, ok := proto.GetExtension(m.Desc.Options(), rbac.E_Operation).(*rbac.ACL_Operation)
		g.P("//", op)
		if !ok {
			g.P("// No operation defined for ", m.GoName)
			g.P("return nil,", fmtImport, ".Errorf(\"No operation defined for ", m.GoName, "\")")
		} else if op != nil {
			g.P("return &", opImport, "{")
			g.P("Domain: ", op.Domain.Number(), ",")
			g.P("Action: ", op.Action.Number(), ",")
			g.P("}, nil")

		}
	}
	g.P("default:")
	g.P("return nil,", fmtImport, "Errorf(\"No operation defined for \"+txName)")
	g.P("}")
	g.P("return nil, nil")
	g.P("}")

	// Gen GetIgnoredFunctions
	g.P()
	g.P("func (s *", v.GoName, "Base) GetIgnoredFunctions() []string {")
	g.P("return []string{\"GetTxOperation\"}")
	g.P("}")
}

// func (s *SpecimenContract) GetEvaluateTransactions() []string {
// 	return []string{
// 		"GetSpecimen",
// 		"GetSpecimenList",
// 		"GetSpecimenByCollection",
// 		"GetSpecimenHistory",
// 	}
// }

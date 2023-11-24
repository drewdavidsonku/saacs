// Code generated by protoc-gen-go-hlf. DO NOT EDIT.
// versions:
// - protoc-gen-cckey v0.0.1
// source: chaincode/ccbio/schema/v0/state.proto

package v0

import (
	v1 "github.com/nova38/thesis/lib/go/gen/auth/v1"
)

func (m *Specimen) ItemType() string {
	return "ccbio.schema.v0.Specimen"
}
func (m *Specimen) KeyAttr() []string {
	attr := []string{}
	attr = append(attr, m.GetSpecimenId())
	return attr
}
func (m *Specimen) SetKeyAttr(attr []string) {
	if len(attr) > 0 {
		m.SpecimenId = attr[0]
	} else {
		return
	}
	return
}

// Domain Item
func (m *Specimen) IsPrimary() bool {
	return true
}
func (m *Specimen) ItemKey() *v1.ItemKey {
	key := &v1.ItemKey{
		CollectionId: m.GetCollectionId(),
		ItemType:     "ccbio.schema.v0.Specimen",
		ItemIdParts:  m.KeyAttr(),
	}
	return key
}

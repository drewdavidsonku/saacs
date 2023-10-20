// Code generated by protoc-gen-go-hlf. DO NOT EDIT.
// versions:
// - protoc-gen-cckey v0.0.1
// source: chaincode/ccbio/schema/v1/service.proto

package schemav1

func (m *Permissions) DiffPath(other *Permissions) (updated []string, all bool) {

	all = true
	// roles: is a bool
	if m.Roles != other.Roles {
		updated = append(updated, "roles")
	} else {
		all = false
	}
	// role_permissions: is a bool
	if m.RolePermissions != other.RolePermissions {
		updated = append(updated, "role_permissions")
	} else {
		all = false
	}
	// users: is a bool
	if m.Users != other.Users {
		updated = append(updated, "users")
	} else {
		all = false
	}
	// specimen: is a bool
	if m.Specimen != other.Specimen {
		updated = append(updated, "specimen")
	} else {
		all = false
	}
	// primary: is a bool
	if m.Primary != other.Primary {
		updated = append(updated, "primary")
	} else {
		all = false
	}
	// secondary: is a bool
	if m.Secondary != other.Secondary {
		updated = append(updated, "secondary")
	} else {
		all = false
	}
	// taxon: is a bool
	if m.Taxon != other.Taxon {
		updated = append(updated, "taxon")
	} else {
		all = false
	}
	// georeference: is a bool
	if m.Georeference != other.Georeference {
		updated = append(updated, "georeference")
	} else {
		all = false
	}
	// images: is a bool
	if m.Images != other.Images {
		updated = append(updated, "images")
	} else {
		all = false
	}
	// loans: is a bool
	if m.Loans != other.Loans {
		updated = append(updated, "loans")
	} else {
		all = false
	}
	// grants: is a bool
	if m.Grants != other.Grants {
		updated = append(updated, "grants")
	} else {
		all = false
	}
	// hidden: is a bool
	if m.Hidden != other.Hidden {
		updated = append(updated, "hidden")
	} else {
		all = false
	}

	return updated, all
}

func (m *GetSuggestedUpdateRequest) DiffPath(other *GetSuggestedUpdateRequest) (updated []string, all bool) {

	all = true
	// id: is a message
	if m.Id != nil || other.Id != nil {
		updated_Id, all_Id := m.Id.DiffPath(other.Id)
		if len(updated_Id) > 0 {
			if all_Id {
				updated = append(updated, "id")
			} else {
				for _, u := range updated_Id {
					updated = append(updated, "id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *GetSuggestedUpdateBySpecimenRequest) DiffPath(other *GetSuggestedUpdateBySpecimenRequest) (updated []string, all bool) {

	all = true
	// id: is a message
	if m.Id != nil || other.Id != nil {
		updated_Id, all_Id := m.Id.DiffPath(other.Id)
		if len(updated_Id) > 0 {
			if all_Id {
				updated = append(updated, "id")
			} else {
				for _, u := range updated_Id {
					updated = append(updated, "id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *GetSuggestedUpdateByCollectionRequest) DiffPath(other *GetSuggestedUpdateByCollectionRequest) (updated []string, all bool) {

	all = true
	// id: is a message
	if m.Id != nil || other.Id != nil {
		updated_Id, all_Id := m.Id.DiffPath(other.Id)
		if len(updated_Id) > 0 {
			if all_Id {
				updated = append(updated, "id")
			} else {
				for _, u := range updated_Id {
					updated = append(updated, "id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *GetUserListRequest) DiffPath(other *GetUserListRequest) (updated []string, all bool) {

	all = true

	return updated, all
}

func (m *GetUserListResponse) DiffPath(other *GetUserListResponse) (updated []string, all bool) {

	all = true
	// users: is a message
	// TODO: Handle lists

	return updated, all
}

func (m *GetUserRequest) DiffPath(other *GetUserRequest) (updated []string, all bool) {

	all = true
	// id: is a message
	if m.Id != nil || other.Id != nil {
		updated_Id, all_Id := m.Id.DiffPath(other.Id)
		if len(updated_Id) > 0 {
			if all_Id {
				updated = append(updated, "id")
			} else {
				for _, u := range updated_Id {
					updated = append(updated, "id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *GetCollectionRequest) DiffPath(other *GetCollectionRequest) (updated []string, all bool) {

	all = true
	// id: is a message
	if m.Id != nil || other.Id != nil {
		updated_Id, all_Id := m.Id.DiffPath(other.Id)
		if len(updated_Id) > 0 {
			if all_Id {
				updated = append(updated, "id")
			} else {
				for _, u := range updated_Id {
					updated = append(updated, "id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *GetSpecimenRequest) DiffPath(other *GetSpecimenRequest) (updated []string, all bool) {

	all = true
	// id: is a message
	if m.Id != nil || other.Id != nil {
		updated_Id, all_Id := m.Id.DiffPath(other.Id)
		if len(updated_Id) > 0 {
			if all_Id {
				updated = append(updated, "id")
			} else {
				for _, u := range updated_Id {
					updated = append(updated, "id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *GetSpecimenHistoryRequest) DiffPath(other *GetSpecimenHistoryRequest) (updated []string, all bool) {

	all = true
	// id: is a message
	if m.Id != nil || other.Id != nil {
		updated_Id, all_Id := m.Id.DiffPath(other.Id)
		if len(updated_Id) > 0 {
			if all_Id {
				updated = append(updated, "id")
			} else {
				for _, u := range updated_Id {
					updated = append(updated, "id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}
	// include_hidden: is a bool
	if m.IncludeHidden != other.IncludeHidden {
		updated = append(updated, "include_hidden")
	} else {
		all = false
	}

	return updated, all
}

func (m *GetSpecimenByCollectionRequest) DiffPath(other *GetSpecimenByCollectionRequest) (updated []string, all bool) {

	all = true
	// id: is a message
	if m.Id != nil || other.Id != nil {
		updated_Id, all_Id := m.Id.DiffPath(other.Id)
		if len(updated_Id) > 0 {
			if all_Id {
				updated = append(updated, "id")
			} else {
				for _, u := range updated_Id {
					updated = append(updated, "id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *GetUserByCollectionRequest) DiffPath(other *GetUserByCollectionRequest) (updated []string, all bool) {

	all = true
	// id: is a message
	if m.Id != nil || other.Id != nil {
		updated_Id, all_Id := m.Id.DiffPath(other.Id)
		if len(updated_Id) > 0 {
			if all_Id {
				updated = append(updated, "id")
			} else {
				for _, u := range updated_Id {
					updated = append(updated, "id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *UserRegisterRequest) DiffPath(other *UserRegisterRequest) (updated []string, all bool) {

	all = true
	// name: is a string
	if m.Name != other.Name {
		updated = append(updated, "name")
	} else {
		all = false
	}
	// email: is a string
	if m.Email != other.Email {
		updated = append(updated, "email")
	} else {
		all = false
	}
	// affiliation: is a string
	if m.Affiliation != other.Affiliation {
		updated = append(updated, "affiliation")
	} else {
		all = false
	}

	return updated, all
}

func (m *UpdateMembershipRequest) DiffPath(other *UpdateMembershipRequest) (updated []string, all bool) {

	all = true
	// user_id: is a message
	if m.UserId != nil || other.UserId != nil {
		updated_UserId, all_UserId := m.UserId.DiffPath(other.UserId)
		if len(updated_UserId) > 0 {
			if all_UserId {
				updated = append(updated, "user_id")
			} else {
				for _, u := range updated_UserId {
					updated = append(updated, "user_id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}
	// collection_id: is a message
	if m.CollectionId != nil || other.CollectionId != nil {
		updated_CollectionId, all_CollectionId := m.CollectionId.DiffPath(other.CollectionId)
		if len(updated_CollectionId) > 0 {
			if all_CollectionId {
				updated = append(updated, "collection_id")
			} else {
				for _, u := range updated_CollectionId {
					updated = append(updated, "collection_id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}
	// new_role: is a enum
	if m.NewRole != other.NewRole {
		updated = append(updated, "new_role")
	} else {
		all = false
	}

	return updated, all
}

func (m *CollectionCreateRequest) DiffPath(other *CollectionCreateRequest) (updated []string, all bool) {

	all = true
	// collection: is a message
	if m.Collection != nil || other.Collection != nil {
		updated_Collection, all_Collection := m.Collection.DiffPath(other.Collection)
		if len(updated_Collection) > 0 {
			if all_Collection {
				updated = append(updated, "collection")
			} else {
				for _, u := range updated_Collection {
					updated = append(updated, "collection."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *CollectionUpdateRequest) DiffPath(other *CollectionUpdateRequest) (updated []string, all bool) {

	all = true
	// collection: is a message
	if m.Collection != nil || other.Collection != nil {
		updated_Collection, all_Collection := m.Collection.DiffPath(other.Collection)
		if len(updated_Collection) > 0 {
			if all_Collection {
				updated = append(updated, "collection")
			} else {
				for _, u := range updated_Collection {
					updated = append(updated, "collection."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *STest) DiffPath(other *STest) (updated []string, all bool) {

	all = true
	// georeference: is a message
	if m.Georeference != nil || other.Georeference != nil {
		updated_Georeference, all_Georeference := m.Georeference.DiffPath(other.Georeference)
		if len(updated_Georeference) > 0 {
			if all_Georeference {
				updated = append(updated, "georeference")
			} else {
				for _, u := range updated_Georeference {
					updated = append(updated, "georeference."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *SpecimenCreateRequest) DiffPath(other *SpecimenCreateRequest) (updated []string, all bool) {

	all = true
	// id: is a message
	if m.Id != nil || other.Id != nil {
		updated_Id, all_Id := m.Id.DiffPath(other.Id)
		if len(updated_Id) > 0 {
			if all_Id {
				updated = append(updated, "id")
			} else {
				for _, u := range updated_Id {
					updated = append(updated, "id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}
	// taxon: is a message
	if m.Taxon != nil || other.Taxon != nil {
		updated_Taxon, all_Taxon := m.Taxon.DiffPath(other.Taxon)
		if len(updated_Taxon) > 0 {
			if all_Taxon {
				updated = append(updated, "taxon")
			} else {
				for _, u := range updated_Taxon {
					updated = append(updated, "taxon."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}
	// primary: is a message
	if m.Primary != nil || other.Primary != nil {
		updated_Primary, all_Primary := m.Primary.DiffPath(other.Primary)
		if len(updated_Primary) > 0 {
			if all_Primary {
				updated = append(updated, "primary")
			} else {
				for _, u := range updated_Primary {
					updated = append(updated, "primary."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}
	// secondary: is a message
	if m.Secondary != nil || other.Secondary != nil {
		updated_Secondary, all_Secondary := m.Secondary.DiffPath(other.Secondary)
		if len(updated_Secondary) > 0 {
			if all_Secondary {
				updated = append(updated, "secondary")
			} else {
				for _, u := range updated_Secondary {
					updated = append(updated, "secondary."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}
	// georeference: is a message
	if m.Georeference != nil || other.Georeference != nil {
		updated_Georeference, all_Georeference := m.Georeference.DiffPath(other.Georeference)
		if len(updated_Georeference) > 0 {
			if all_Georeference {
				updated = append(updated, "georeference")
			} else {
				for _, u := range updated_Georeference {
					updated = append(updated, "georeference."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}
	// images: is a message
	// TODO: Handle maps
	// loans: is a string
	if m.Loans != other.Loans {
		updated = append(updated, "loans")
	} else {
		all = false
	}
	// grants: is a string
	if m.Grants != other.Grants {
		updated = append(updated, "grants")
	} else {
		all = false
	}

	return updated, all
}

func (m *SpecimenCreateResponse) DiffPath(other *SpecimenCreateResponse) (updated []string, all bool) {

	all = true
	// specimen: is a message
	if m.Specimen != nil || other.Specimen != nil {
		updated_Specimen, all_Specimen := m.Specimen.DiffPath(other.Specimen)
		if len(updated_Specimen) > 0 {
			if all_Specimen {
				updated = append(updated, "specimen")
			} else {
				for _, u := range updated_Specimen {
					updated = append(updated, "specimen."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *SpecimenUpdateRequest) DiffPath(other *SpecimenUpdateRequest) (updated []string, all bool) {

	all = true
	// specimen: is a message
	if m.Specimen != nil || other.Specimen != nil {
		updated_Specimen, all_Specimen := m.Specimen.DiffPath(other.Specimen)
		if len(updated_Specimen) > 0 {
			if all_Specimen {
				updated = append(updated, "specimen")
			} else {
				for _, u := range updated_Specimen {
					updated = append(updated, "specimen."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *SpecimenHideTxRequest) DiffPath(other *SpecimenHideTxRequest) (updated []string, all bool) {

	all = true
	// id: is a message
	if m.Id != nil || other.Id != nil {
		updated_Id, all_Id := m.Id.DiffPath(other.Id)
		if len(updated_Id) > 0 {
			if all_Id {
				updated = append(updated, "id")
			} else {
				for _, u := range updated_Id {
					updated = append(updated, "id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}
	// tx: is a message
	if m.Tx != nil || other.Tx != nil {
		updated_Tx, all_Tx := m.Tx.DiffPath(other.Tx)
		if len(updated_Tx) > 0 {
			if all_Tx {
				updated = append(updated, "tx")
			} else {
				for _, u := range updated_Tx {
					updated = append(updated, "tx."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *SpecimenUnHideTxRequest) DiffPath(other *SpecimenUnHideTxRequest) (updated []string, all bool) {

	all = true
	// id: is a message
	if m.Id != nil || other.Id != nil {
		updated_Id, all_Id := m.Id.DiffPath(other.Id)
		if len(updated_Id) > 0 {
			if all_Id {
				updated = append(updated, "id")
			} else {
				for _, u := range updated_Id {
					updated = append(updated, "id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}
	// tx: is a message
	if m.Tx != nil || other.Tx != nil {
		updated_Tx, all_Tx := m.Tx.DiffPath(other.Tx)
		if len(updated_Tx) > 0 {
			if all_Tx {
				updated = append(updated, "tx")
			} else {
				for _, u := range updated_Tx {
					updated = append(updated, "tx."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *SpecimenDeleteRequest) DiffPath(other *SpecimenDeleteRequest) (updated []string, all bool) {

	all = true
	// id: is a message
	if m.Id != nil || other.Id != nil {
		updated_Id, all_Id := m.Id.DiffPath(other.Id)
		if len(updated_Id) > 0 {
			if all_Id {
				updated = append(updated, "id")
			} else {
				for _, u := range updated_Id {
					updated = append(updated, "id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *SuggestedUpdateCreateRequest) DiffPath(other *SuggestedUpdateCreateRequest) (updated []string, all bool) {

	all = true
	// suggested_update: is a message
	if m.SuggestedUpdate != nil || other.SuggestedUpdate != nil {
		updated_SuggestedUpdate, all_SuggestedUpdate := m.SuggestedUpdate.DiffPath(other.SuggestedUpdate)
		if len(updated_SuggestedUpdate) > 0 {
			if all_SuggestedUpdate {
				updated = append(updated, "suggested_update")
			} else {
				for _, u := range updated_SuggestedUpdate {
					updated = append(updated, "suggested_update."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}

	return updated, all
}

func (m *SuggestedUpdateApproveRequest) DiffPath(other *SuggestedUpdateApproveRequest) (updated []string, all bool) {

	all = true
	// id: is a message
	if m.Id != nil || other.Id != nil {
		updated_Id, all_Id := m.Id.DiffPath(other.Id)
		if len(updated_Id) > 0 {
			if all_Id {
				updated = append(updated, "id")
			} else {
				for _, u := range updated_Id {
					updated = append(updated, "id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}
	// comment: is a string
	if m.Comment != other.Comment {
		updated = append(updated, "comment")
	} else {
		all = false
	}

	return updated, all
}

func (m *SuggestedUpdateRejectRequest) DiffPath(other *SuggestedUpdateRejectRequest) (updated []string, all bool) {

	all = true
	// id: is a message
	if m.Id != nil || other.Id != nil {
		updated_Id, all_Id := m.Id.DiffPath(other.Id)
		if len(updated_Id) > 0 {
			if all_Id {
				updated = append(updated, "id")
			} else {
				for _, u := range updated_Id {
					updated = append(updated, "id."+u)
				}
			}
		} else {
			all = false
		}
	} else {
		all = false
	}
	// comment: is a string
	if m.Comment != other.Comment {
		updated = append(updated, "comment")
	} else {
		all = false
	}

	return updated, all
}

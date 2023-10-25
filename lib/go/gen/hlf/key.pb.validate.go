// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: hlf/key.proto

package hlf

import (
	"bytes"
	"errors"
	"fmt"
	"net"
	"net/mail"
	"net/url"
	"regexp"
	"sort"
	"strings"
	"time"
	"unicode/utf8"

	"google.golang.org/protobuf/types/known/anypb"
)

// ensure the imports are used
var (
	_ = bytes.MinRead
	_ = errors.New("")
	_ = fmt.Print
	_ = utf8.UTFMax
	_ = (*regexp.Regexp)(nil)
	_ = (*strings.Reader)(nil)
	_ = net.IPv4len
	_ = time.Duration(0)
	_ = (*url.URL)(nil)
	_ = (*mail.Address)(nil)
	_ = anypb.Any{}
	_ = sort.Sort
)

// Validate checks the field values on KeySchema with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *KeySchema) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on KeySchema with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in KeySchemaMultiError, or nil
// if none found.
func (m *KeySchema) ValidateAll() error {
	return m.validate(true)
}

func (m *KeySchema) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Namespace

	if all {
		switch v := interface{}(m.GetKeyPaths()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, KeySchemaValidationError{
					field:  "KeyPaths",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, KeySchemaValidationError{
					field:  "KeyPaths",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetKeyPaths()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return KeySchemaValidationError{
				field:  "KeyPaths",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return KeySchemaMultiError(errors)
	}

	return nil
}

// KeySchemaMultiError is an error wrapping multiple validation errors returned
// by KeySchema.ValidateAll() if the designated constraints aren't met.
type KeySchemaMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m KeySchemaMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m KeySchemaMultiError) AllErrors() []error { return m }

// KeySchemaValidationError is the validation error returned by
// KeySchema.Validate if the designated constraints aren't met.
type KeySchemaValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e KeySchemaValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e KeySchemaValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e KeySchemaValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e KeySchemaValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e KeySchemaValidationError) ErrorName() string { return "KeySchemaValidationError" }

// Error satisfies the builtin error interface
func (e KeySchemaValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sKeySchema.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = KeySchemaValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = KeySchemaValidationError{}

// Validate checks the field values on ObjectDiff with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *ObjectDiff) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on ObjectDiff with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in ObjectDiffMultiError, or
// nil if none found.
func (m *ObjectDiff) ValidateAll() error {
	return m.validate(true)
}

func (m *ObjectDiff) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for ObjectName

	// no validation rules for AllFields

	if len(errors) > 0 {
		return ObjectDiffMultiError(errors)
	}

	return nil
}

// ObjectDiffMultiError is an error wrapping multiple validation errors
// returned by ObjectDiff.ValidateAll() if the designated constraints aren't met.
type ObjectDiffMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m ObjectDiffMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m ObjectDiffMultiError) AllErrors() []error { return m }

// ObjectDiffValidationError is the validation error returned by
// ObjectDiff.Validate if the designated constraints aren't met.
type ObjectDiffValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ObjectDiffValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ObjectDiffValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ObjectDiffValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ObjectDiffValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ObjectDiffValidationError) ErrorName() string { return "ObjectDiffValidationError" }

// Error satisfies the builtin error interface
func (e ObjectDiffValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sObjectDiff.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ObjectDiffValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ObjectDiffValidationError{}

// Validate checks the field values on DataField with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *DataField) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on DataField with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in DataFieldMultiError, or nil
// if none found.
func (m *DataField) ValidateAll() error {
	return m.validate(true)
}

func (m *DataField) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for IsData

	if all {
		switch v := interface{}(m.GetUpdatedLog()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, DataFieldValidationError{
					field:  "UpdatedLog",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, DataFieldValidationError{
					field:  "UpdatedLog",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetUpdatedLog()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return DataFieldValidationError{
				field:  "UpdatedLog",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return DataFieldMultiError(errors)
	}

	return nil
}

// DataFieldMultiError is an error wrapping multiple validation errors returned
// by DataField.ValidateAll() if the designated constraints aren't met.
type DataFieldMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m DataFieldMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m DataFieldMultiError) AllErrors() []error { return m }

// DataFieldValidationError is the validation error returned by
// DataField.Validate if the designated constraints aren't met.
type DataFieldValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e DataFieldValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e DataFieldValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e DataFieldValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e DataFieldValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e DataFieldValidationError) ErrorName() string { return "DataFieldValidationError" }

// Error satisfies the builtin error interface
func (e DataFieldValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sDataField.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = DataFieldValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = DataFieldValidationError{}
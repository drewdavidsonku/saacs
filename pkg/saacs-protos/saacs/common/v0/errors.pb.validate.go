// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: saacs/common/v0/errors.proto

package v0

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

// Validate checks the field values on ErrorWrapper with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *ErrorWrapper) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on ErrorWrapper with the rules defined
// in the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in ErrorWrapperMultiError, or
// nil if none found.
func (m *ErrorWrapper) ValidateAll() error {
	return m.validate(true)
}

func (m *ErrorWrapper) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Code

	if all {
		switch v := interface{}(m.GetError()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, ErrorWrapperValidationError{
					field:  "Error",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, ErrorWrapperValidationError{
					field:  "Error",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetError()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return ErrorWrapperValidationError{
				field:  "Error",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	// no validation rules for Message

	if len(errors) > 0 {
		return ErrorWrapperMultiError(errors)
	}

	return nil
}

// ErrorWrapperMultiError is an error wrapping multiple validation errors
// returned by ErrorWrapper.ValidateAll() if the designated constraints aren't met.
type ErrorWrapperMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m ErrorWrapperMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m ErrorWrapperMultiError) AllErrors() []error { return m }

// ErrorWrapperValidationError is the validation error returned by
// ErrorWrapper.Validate if the designated constraints aren't met.
type ErrorWrapperValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ErrorWrapperValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ErrorWrapperValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ErrorWrapperValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ErrorWrapperValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ErrorWrapperValidationError) ErrorName() string { return "ErrorWrapperValidationError" }

// Error satisfies the builtin error interface
func (e ErrorWrapperValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sErrorWrapper.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ErrorWrapperValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ErrorWrapperValidationError{}
package models

type Contact struct {
	ID     uint `json:"-"`
	UserID uint `json:"-"`
	Type   string
	Value  string
}

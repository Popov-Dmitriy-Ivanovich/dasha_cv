package models

type Tag struct {
	ID uint `gorm:"primaryKey" json:"-"`
	UserID uint `json:"-"`
	Value string
}
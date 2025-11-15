package models

type Edu struct {
	ID     uint `gorm:"primaryKey" json:"-"`
	UserID uint `json:"-"`
	Place  string
}

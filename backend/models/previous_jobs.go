package models

import "time"

type JobDescription struct {
	ID            uint `json:"-"`
	PreviousJobID uint `json:"-"`
	Paragraph     string
}

type PreviousJob struct {
	ID          uint `json:"-"`
	UserID      uint `json:"-"`
	Title       string
	DateBegin   time.Time
	DateEnd     *time.Time
	Description []JobDescription
}

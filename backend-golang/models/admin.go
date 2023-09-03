package models

import (
	"time"

	"gorm.io/gorm"
)

type Admin struct {
	gorm.Model
	ID         uint             `gorm:"primaryKey" json:"id"`
	CreatedAt  time.Time        `gorm:"not null" json:"createdAt,omitempty"`
	UpdatedAt  time.Time        `gorm:"not null" json:"updatedAt,omitempty"`
	Username   string           `gorm:"type:varchar(128);unique;not null" json:"username"`
	Password   string           `gorm:"type:varchar(256);not null" json:"-"`
	FirstName  string           `gorm:"type:varchar(128)" json:"firstName"`
	LastName   string           `gorm:"type:varchar(128)" json:"lastName"`
	Email      string           `gorm:"type:varchar(128);unique;not null" json:"email"`
	ActionLogs []AdminActionLog `gorm:"foreignKey:AdminID" json:"actionLogs"`
}

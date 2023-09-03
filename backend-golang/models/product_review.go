package models

import (
	"gorm.io/gorm"
)

type ProductReview struct {
	gorm.Model
	ID        uint   `gorm:"primaryKey" json:"id"`
	UserID    string `json:"userId"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `json:"email"`
	Contact   string `json:"contact"`
	ProductID uint   `json:"productId"`
	Rating    int    `json:"rating"`
	Review    string `gorm:"type:varchar(128);not null" json:"review"`
}

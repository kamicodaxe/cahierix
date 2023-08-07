package models

import (
	"gorm.io/gorm"
)

type ProductReview struct {
	gorm.Model
	UserID    string `json:"userId"`
	ProductID uint   `json:"productId"`
	Rating    int    `json:"rating"`
	Review    string `gorm:"type:varchar(128);not null" json:"review"`
}

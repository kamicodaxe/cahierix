package models

import (
	"gorm.io/gorm"
)

type ProductImage struct {
	gorm.Model
	ID        string `gorm:"primaryKey" json:"id"`
	ImageUrl  string `gorm:"not null" json:"imageUrl"`
	ProductID uint   `gorm:"index" json:"productId"`
}

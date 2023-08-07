package models

import (
	"gorm.io/gorm"
)

type ProductSubcategory struct {
	gorm.Model
	ID       string    `gorm:"primaryKey" json:"id"`
	Name     string    `json:"name"`
	Desc     string    `json:"desc"`
	Products []Product `gorm:"many2many:product_subcategories;" json:"products"`
}

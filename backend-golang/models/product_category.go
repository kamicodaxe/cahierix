package models

import (
	"gorm.io/gorm"
)

type ProductCategory struct {
	gorm.Model
	ID       uint      `gorm:"primaryKey" json:"id"`
	Name     string    `gorm:"type:varchar(128);not null" json:"name"`
	Desc     string    `gorm:"type:varchar(1024);not null" json:"desc"`
	Products []Product `gorm:"many2many:product_categories;" json:"products"`
}

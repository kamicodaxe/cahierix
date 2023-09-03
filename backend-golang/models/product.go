package models

import (
	"time"

	"gorm.io/gorm"
)

type Product struct {
	gorm.Model
	ID            uint                 `gorm:"primaryKey" json:"id"`
	CreatedAt     time.Time            `gorm:"not null" json:"createdAt,omitempty"`
	UpdatedAt     time.Time            `gorm:"not null" json:"updatedAt,omitempty"`
	Name          string               `gorm:"type:varchar(128);not null" json:"name"`
	Slug          string               `gorm:"type:varchar(128);not null" json:"slug"`
	Description   string               `gorm:"type:varchar(1024);not null" json:"description"`
	Price         float64              `gorm:"not null" json:"price"`
	Categories    []ProductCategory    `gorm:"many2many:product_categories;" json:"categories"`
	Subcategories []ProductSubcategory `gorm:"many2many:product_subcategories;" json:"subcategories"`
	Images        []ProductImage       `json:"images"`
	Reviews       []ProductReview      `json:"reviews"`
	Discount      ProductDiscount      `json:"discount"`
}

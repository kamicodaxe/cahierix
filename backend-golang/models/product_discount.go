package models

import (
	"gorm.io/gorm"
)

type ProductDiscount struct {
	gorm.Model
	ID                 string  `json:"id"`
	ProductID          uint    `json:"productId"`
	Name               string  `json:"name"`
	Desc               string  `json:"desc"`
	DiscountPercentage float64 `json:"discountPercentage"`
	DiscountAmount     float64 `json:"discountAmount"`
	Active             bool    `json:"active"`
}

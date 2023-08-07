package models

import (
	"gorm.io/gorm"
)

type ProductInventory struct {
	gorm.Model
	AddedBy   uint `json:"addedBy"`
	ProductID uint `json:"productId"`
	Quantity  int  `json:"quantity"`
}

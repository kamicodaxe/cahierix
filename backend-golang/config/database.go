// @/config/database.go
package config

import (
	"github.com/kamicodaxe/cahierix/models"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var Database *gorm.DB
var DATABASE_URI string = "./cahierix.db"

func Connect() error {
	var err error

	Database, err = gorm.Open(sqlite.Open(DATABASE_URI), &gorm.Config{
		SkipDefaultTransaction: true,
		PrepareStmt:            true,
	})

	if err != nil {
		panic(err)
	}

	Database.AutoMigrate(
		// Products Related
		&models.Admin{},
		&models.AdminActionLog{},

		// Products Related
		&models.ProductCategory{},
		&models.ProductDiscount{},
		&models.ProductImage{},
		&models.ProductInventory{},
		&models.ProductReview{},
		&models.ProductSubcategory{},
		&models.Product{},
	)

	return nil
}

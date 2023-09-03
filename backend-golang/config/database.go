// @/config/Database.go
package config

import (
	"log"
	"os"

	"github.com/kamicodaxe/cahierix/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var Database *gorm.DB

func Connect() error {
	var err error

	dsn := os.Getenv("DSN")
	Database, err = gorm.Open(mysql.Open(dsn), &gorm.Config{
		DisableForeignKeyConstraintWhenMigrating: true,
	})
	if err != nil {
		log.Fatalf("failed to connect: %v", err)
	}

	log.Println("Successfully connected to PlanetScale!")

	if err := Database.AutoMigrate(
		// &models.Admin{},
		// &models.AdminActionLog{},
		&models.ProductCategory{},
		&models.ProductDiscount{},
		&models.ProductImage{},
		&models.ProductInventory{},
		&models.ProductReview{},
		&models.ProductSubcategory{},
		&models.Product{},
	); err != nil {
		log.Fatalf("failed to auto-migrate: %v", err)
		return err
	}

	return nil
}

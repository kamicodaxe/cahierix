package main

import (
	"github.com/gofiber/fiber/v2"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func initDatabase() (*gorm.DB, error) {
	db, err := gorm.Open(sqlite.Open("database.db"), &gorm.Config{})
	if err != nil {
		return nil, err
	}
	return db, nil
}

func setupRoutes(app *fiber.App, db *gorm.DB) {
	// Define your API routes here
}

func main() {
	app := fiber.New()

	db, err := initDatabase()
	if err != nil {
		panic("Failed to connect to the database")
	}

	setupRoutes(app, db)

	// Start the server
	port := ":3001" // Change the port as needed
	app.Listen(port)
}

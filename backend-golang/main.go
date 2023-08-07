package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/kamicodaxe/cahierix/config"
	"github.com/kamicodaxe/cahierix/handlers"
)

func main() {
	app := fiber.New()
	app.Use(logger.New())

	// Connect Database
	config.Connect()

	app.Get("/api/healthchecker", func(c *fiber.Ctx) error {
		return c.Status(200).JSON(fiber.Map{
			"status":  "success",
			"message": "Welcome to Cahierix!",
		})
	})

	app.Get("/products", handlers.GetProdcts)

	log.Fatal(app.Listen(":5000"))
}

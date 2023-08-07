package handlers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/kamicodaxe/cahierix/config"
	"github.com/kamicodaxe/cahierix/models"
)

func GetProdcts(c *fiber.Ctx) error {
	var products []models.Product

	config.Database.Find(&products)
	return c.Status(200).JSON(products)
}

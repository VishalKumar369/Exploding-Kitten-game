package main

import (
	"back-end/controller"
	"back-end/routes"
	"back-end/service"
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func init() {
	// Load environment variables from .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

func main() {
	// Initialize Gin router
	router := gin.Default()

	// Initialize Redis service
	redisService := service.NewRedisService()

	// Inject Redis service into controllers
	userController := controller.NewUserController(redisService)

	// Set up routes
	routes.SetupRoutes(router, userController, redisService)

	// Start the server
	port := os.Getenv("PORT")
	router.Run(":" + port)
}

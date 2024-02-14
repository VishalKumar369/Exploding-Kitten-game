package routes

import (
	"back-end/controller"
	"back-end/middleware"
	"back-end/service"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(router *gin.Engine, userController *controller.UserController, redisService *service.RedisService) {
	router.Use(corsMiddleware)

	api := router.Group("/explodingKitten")
	{
		api.POST("/user", userController.CreateUser)
		api.GET("/users", middleware.Authentication(redisService), userController.GetAllUsers)
		// Add other routes as needed
	}
}

func corsMiddleware(c *gin.Context) {
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
	if c.Request.Method == "OPTIONS" {
		c.AbortWithStatus(204)
		return
	}
	c.Next()
}

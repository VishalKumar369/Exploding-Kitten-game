package controller

import (
	"back-end/service"
	"net/http"

	"github.com/gin-gonic/gin"
)

type UserController struct {
	redisService *service.RedisService
}

func NewUserController(redisService *service.RedisService) *UserController {
	return &UserController{redisService: redisService}
}

func (uc *UserController) GetAllUsers(c *gin.Context) {
	users, err := uc.redisService.GetAllUsers()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Internal Server Error"})
		return
	}

	c.JSON(http.StatusOK, users)
}

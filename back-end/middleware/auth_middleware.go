package middleware

import (
	"back-end/model"
	"back-end/service"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Authentication(redisService *service.RedisService) gin.HandlerFunc {
	return func(c *gin.Context) {
		var user model.User
		if err := c.BindJSON(&user); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			c.Abort()
			return
		}

		// Check if user exists in Redis
		exists, err := redisService.UserExists(user.UserName)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Internal Server Error"})
			c.Abort()
			return
		}

		if exists == 0 {
			// User does not exist, proceed to next middleware
			c.Next()
		} else {
			// User exists, fetch details from Redis
			userDetails, err := redisService.GetUserDetails(user.UserName)
			if err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": "Internal Server Error"})
				c.Abort()
				return
			}

			// Update win and loose counts if necessary
			if user.Win > userDetails.Win {
				redisService.IncrementWinCount(user.UserName)
			}

			if user.Loose > userDetails.Loose {
				redisService.IncrementLooseCount(user.UserName)
			}

			// Respond with user details
			c.JSON(http.StatusOK, userDetails)
			c.Abort()
		}
	}
}

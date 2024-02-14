package service

import (
	"back-end/model"
	"context"
	"os"
	"strconv"

	"github.com/go-redis/redis/v8"
)

type RedisService struct {
	client *redis.Client
}

func NewRedisService() *RedisService {
	rdb := redis.NewClient(&redis.Options{
		Addr:     os.Getenv("R_HOST") + ":" + os.Getenv("R_PORT"),
		Password: os.Getenv("R_AUTH_PASS"),
		DB:       parseEnvInt("R_SELECTED_DB"),
	})

	return &RedisService{client: rdb}
}

func (rs *RedisService) UserExists(userName string) (int64, error) {
	ctx := context.Background()
	result, err := rs.client.Exists(ctx, userName).Result()
	return result, err
}

func (rs *RedisService) GetUserDetails(userName string) (model.User, error) {
	ctx := context.Background()
	userDetails, err := rs.client.HGetAll(ctx, userName).Result()
	if err != nil {
		return model.User{}, err
	}

	win, _ := strconv.Atoi(userDetails["win"])
	loose, _ := strconv.Atoi(userDetails["loose"])

	return model.User{
		UserName: userName,
		Win:      win,
		Loose:    loose,
	}, nil
}

func (rs *RedisService) IncrementWinCount(userName string) error {
	ctx := context.Background()
	_, err := rs.client.HIncrBy(ctx, userName, "win", 1).Result()
	return err
}

func (rs *RedisService) IncrementLooseCount(userName string) error {
	ctx := context.Background()
	_, err := rs.client.HIncrBy(ctx, userName, "loose", 1).Result()
	return err
}

// Helper function to parse environment variables to integers
func parseEnvInt(key string) int {
	val, err := strconv.Atoi(os.Getenv(key))
	if err != nil {
		return 0
	}
	return val
}

func (rs *RedisService) GetAllUsers() ([]model.User, error) {
	ctx := context.Background()

	// Get all keys in the Redis database
	keys, err := rs.client.Keys(ctx, "*").Result()
	if err != nil {
		return nil, err
	}

	// Initialize a slice to store User objects
	var users []model.User

	// Iterate through each key and fetch user details
	for _, key := range keys {
		userDetails, err := rs.client.HGetAll(ctx, key).Result()
		if err != nil {
			return nil, err
		}

		win, _ := strconv.Atoi(userDetails["win"])
		loose, _ := strconv.Atoi(userDetails["loose"])

		// Create a User object and append it to the slice
		user := model.User{
			UserName: key,
			Win:      win,
			Loose:    loose,
		}
		users = append(users, user)
	}

	return users, nil
}

func (rs *RedisService) CreateUser(user model.User) error {
	ctx := context.Background()

	// Check if the user already exists
	exists, err := rs.UserExists(user.UserName)
	if err != nil {
		return err
	}

	if exists > 0 {
		return nil
	}

	userMap := map[string]interface{}{
		"win":   0,
		"loose": 0,
	}

	_, err = rs.client.HMSet(ctx, user.UserName, userMap).Result()
	if err != nil {
		return err
	}

	return nil
}

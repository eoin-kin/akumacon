package handlers

import (
	"context"
	"fmt"
	"net/http"
	"server/config"

	gin "github.com/gin-gonic/gin"
)

// Router initializes the router and sets up the routes

func Router() *gin.Engine {
	r := gin.Default()

	// Initialize Firestore client
	ctx := context.Background()
	client, err := config.FirestoreClient(ctx)
	if err != nil {
		panic(fmt.Sprintf("Failed to create Firestore client: %v", err))
	}
	defer client.Close()

	// Set up routes
	r.POST("/orders", func(c *gin.Context) {
		order := CreateOrder(c.Writer, c.Request)
		c.JSON(http.StatusCreated, order)
	})

	return r
}
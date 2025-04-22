package router

import (
	"github.com/gin-gonic/gin"
	"server/handlers"
)

// SetupRouter configures all routes for the API
func SetupRouter() *gin.Engine {
	r := gin.Default()

	// Middleware for CORS
	r.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	})

	// API routes
	v1 := r.Group("/api/v1")
	{
		orders := v1.Group("/orders")
		{
			orders.GET("/", handlers.GetOrders)
			orders.GET("/:id", handlers.GetOrder)
			orders.POST("/", handlers.CreateOrder)
			orders.DELETE("/:id", handlers.DeleteOrder)
		}

		// Add more resource endpoints as needed
	}

	return r
}

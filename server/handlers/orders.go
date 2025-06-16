package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"server/models"
)

func CreateOrder(w http.ResponseWriter, r *http.Request) models.Order {
	var input models.HTTPInput
	if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
	}

	order := models.Order{
		ID:    input.ID,
		EMail: input.Email,
	}

	var createdTickets []models.Ticket

	for ticketCategory, quantity := range input.Tickets {
		for i := 0; i < quantity; i++ {
			ticket := models.Ticket{
				ID:       fmt.Sprintf("%s-%d", ticketCategory, i),
				Category: ticketCategory,
			}
			populateDates(ticket)
			createdTickets = append(createdTickets, ticket)
			
		}
	}

	// Assign the created ticket IDs to the order
	order.Tickets = createdTickets
	
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(order)

	return order
}

func populateDates(ticket models.Ticket) {
	switch ticket.Category {
	case "O18Weekend":
		ticket.Dates = []string{
			"2026-03-20T00:00:00Z",
			"2026-03-21T00:00:00Z",
			"2026-03-22T00:00:00Z",
		}
	case "O18Day":
		// Day passes set to a date in the past to handle validation logic
		ticket.Dates = []string{
			"2002-07-12T00:00:00Z",
		}
	case "U18Weekend":
		ticket.Dates = []string{
			"2026-03-20T00:00:00Z",
			"2026-03-21T00:00:00Z",
			"2026-03-22T00:00:00Z",
		}
	case "U18Day":
		ticket.Dates = []string{
			"2002-07-12T00:00:00Z",
		}
	case "SWeekend":
		ticket.Dates = []string{
			"2026-03-20T00:00:00Z",
			"2026-03-21T00:00:00Z",
			"2026-03-22T00:00:00Z",
		}
	}
}


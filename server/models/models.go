package models

type Order struct {
	ID      string   `json:"id"`
	EMail   string   `json:"email"`
	Tickets []Ticket `json:"tickets"`
}

type Ticket struct {
	ID       string   `json:"id"`
	Category string   `json:"category"`
	Dates    []string `json:"dates"`
}

type HTTPInput struct {
	Email   string         `json:"email"`
	Tickets map[string]int `json:"tickets"`
	ID      string         `json:"id"`
}
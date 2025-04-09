package models

import (
	"encoding/json"
	_ "encoding/json"
	"time"
)

type Ticket struct {
	DatesString []string `json:"dates"`
	Id          string   `json:"id"`
	Dates       []time.Time
}

func (t *Ticket) TicketDateParse() error {
	ds := t.DatesString
	for _, d := range ds {
		parsed, err := time.Parse("2006-01-02", d)
		if err != nil {
			return err
		}
		t.Dates = append(t.Dates, parsed)
	}
	return nil
}

type Order struct {
	Tickets     []Ticket
	JSONTickets []string `json:"jsonTickets"`
	Email       string   `json:"email"`
}

func (o *Order) OrderTickets() error {
	jt := o.JSONTickets

	for _, t := range jt {
		var ticket Ticket
		if err := json.Unmarshal([]byte(t), &ticket); err != nil {
			return err
		}
		o.Tickets = append(o.Tickets, ticket)
	}
	return nil
}

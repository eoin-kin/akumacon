package config

import (
	"context"
	"log"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go/v4"
	"firebase.google.com/go/v4/auth"
	"google.golang.org/api/option"
)

type FirebaseApp struct {
	App       *firebase.App
	Auth      *auth.Client
	Firestore *firestore.Client
}

func InitFirebase() *FirebaseApp {
	ctx := context.Background()
	app, err := firebase.NewApp(ctx, nil)
}

package config

import (
	"context"
	"encoding/json"
	"log"
	"os"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"
	"google.golang.org/api/option"
)

// FirebaseCredentials represents the structure of a Firebase service account JSON
type FirebaseCredentials struct {
	Type                    string `json:"type"`
	ProjectID               string `json:"project_id"`
	PrivateKeyID            string `json:"private_key_id"`
	PrivateKey              string `json:"private_key"`
	ClientEmail             string `json:"client_email"`
	ClientID                string `json:"client_id"`
	AuthURI                 string `json:"auth_uri"`
	TokenURI                string `json:"token_uri"`
	AuthProviderX509CertURL string `json:"auth_provider_x509_cert_url"`
	ClientX509CertURL       string `json:"client_x509_cert_url"`
}

// FirestoreClient returns a new Firestore client using environment variables or a file
func FirestoreClient(ctx context.Context) (*firestore.Client, error) {
	var opts option.ClientOption
	
	// Check if credential JSON is provided as an environment variable
	if credJSON := os.Getenv("FIREBASE_CREDENTIALS"); credJSON != "" {
		// Use credentials from environment variable
		opts = option.WithCredentialsJSON([]byte(credJSON))
	} else if credFile := os.Getenv("FIREBASE_CREDENTIALS_FILE"); credFile != "" {
		// Use credentials file path
		opts = option.WithCredentialsFile(credFile)
	} else {
		// Try to construct credentials from individual env vars
		creds := FirebaseCredentials{
			Type:                    os.Getenv("FIREBASE_TYPE"),
			ProjectID:               os.Getenv("FIREBASE_PROJECT_ID"),
			PrivateKeyID:            os.Getenv("FIREBASE_PRIVATE_KEY_ID"),
			PrivateKey:              os.Getenv("FIREBASE_PRIVATE_KEY"),
			ClientEmail:             os.Getenv("FIREBASE_CLIENT_EMAIL"),
			ClientID:                os.Getenv("FIREBASE_CLIENT_ID"),
			AuthURI:                 os.Getenv("FIREBASE_AUTH_URI"),
			TokenURI:                os.Getenv("FIREBASE_TOKEN_URI"),
			AuthProviderX509CertURL: os.Getenv("FIREBASE_AUTH_PROVIDER_CERT_URL"),
			ClientX509CertURL:       os.Getenv("FIREBASE_CLIENT_CERT_URL"),
		}
		
		// Convert to JSON
		credsJSON, err := json.Marshal(creds)
		if err != nil {
			return nil, err
		}
		
		opts = option.WithCredentialsJSON(credsJSON)
	}
	
	// Initialize Firebase app
	app, err := firebase.NewApp(ctx, nil, opts)
	if err != nil {
		log.Printf("Failed to initialize Firebase app: %v", err)
		return nil, err
	}
	
	// Get Firestore client
	client, err := app.Firestore(ctx)
	if err != nil {
		log.Printf("Failed to create Firestore client: %v", err)
		return nil, err
	}
	
	return client, nil
}



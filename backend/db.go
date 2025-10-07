package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var userCollection *mongo.Collection

func ConnectDB() {
	// ✅ Use mongo.Connect instead of mongo.NewClient (simpler and newer way)
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI("mongodb://localhost:27017"))
	if err != nil {
		log.Fatal("Error creating Mongo client:", err)
	}

	// ✅ Check connection with a timeout
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	if err := client.Ping(ctx, nil); err != nil {
		log.Fatal("Error connecting to MongoDB:", err)
	}

	userCollection = client.Database("testdb").Collection("users")
	fmt.Println("✅ Connected to MongoDB!")
}

package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/rs/cors"
)

func main() {
	ConnectDB()

	mux := http.NewServeMux()

	mux.HandleFunc("/signup", SignUpHandler)
	mux.HandleFunc("/users", GetUserHandler)

	// Allow all origins (for now)
	handler := cors.AllowAll().Handler(mux)

	fmt.Println("🚀 Server running on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", handler))
}

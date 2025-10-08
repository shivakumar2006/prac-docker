# official go image of mu version 
FROM golang:1.23.4

#set the working directory 
WORKDIR /app 

# Copy go.mod or go.sum first 
COPY ./backend/go.mod ./backend/go.sum ./

# download dependencies 
RUN go mod download 

# copy the entire backend source code 
COPY ./backend ./

#Build the go app 
RUN go build -o main . 

# Expose. the backend port 
EXPOSE 8080 

#Command to run the app 
CMD ["./main"]
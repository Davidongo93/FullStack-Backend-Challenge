#!/bin/bash

# Define the base URL
BASE_URL="http://localhost:3000"

# Request 1: Hello world!
curl -X GET "$BASE_URL/"

# Request 2: Repository route
curl -X GET "$BASE_URL/repository"

# Request 3: User repositories
curl -X GET "$BASE_URL/repository/user-repositories?user=google"

# FullStack Backend Challenge

Welcome to the FullStack Backend Challenge! This repository contains the backend code for the technical assessment interview. Please follow the instructions below to set up and run the project.

## Prerequisites

- Node.js v20.9.0 ( NVM version 1.1.11)
- NPM v10.2.1

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Davidongo93/FullStack-Backend-Challenge.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd FullStack-Backend-Challenge
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Run the Project:**
   ```bash
   npm start
   ```

   The application will start, and you can access it at [http://localhost:3000](http://localhost:3000).
   

# API Requests:

If you prefer using [Insomnia](https://insomnia.rest/), the API requests are available in the root of the project as an exported Insomnia workspace (`Insomnia_collection.json`). Simply import this file into your Insomnia workspace.

If you prefer using `curl` for making API requests, you can execute the provided shell script (`api_requests.sh`). The default user passed as a parameter is set to "google" as per the guidelines. To run the script, use the following command:

```bash
./api_requests.sh
```

Ensure that the script has execution permissions:

```bash
chmod +x api_requests.sh
```

Please note that the base URL for the API is set to `http://localhost:3000`. If your API is running on a different host or port, update the `BASE_URL` variable in the script accordingly.

## Project Structure

- The main backend code is located in the `src` folder.
- Additional files related to the technical challenge are stored in the `public` folder.

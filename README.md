# SSH Shared Grocery Delivery Service Prototype

This project is a prototype for a shared grocery delivery service, developed for a hypothetical organization called Student Smart Homes (SSH). This service is designed to be a new feature extending the SSH Hub, App, and Cloud, providing a convenient way for users to manage and share grocery deliveries.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
<!-- - [Project Structure](#project-structure) -->
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Dockerization](#dockerization)
<!-- - [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license) -->

## Introduction

The SSH Shared Grocery Delivery Service allows users to collaboratively manage grocery orders, share costs, and streamline the delivery process. This prototype demonstrates the core functionality of the service, including user management, order creation, item management, and checkout.

## Features

- **User Management**: Manage users and their associated households.
- **Order Management**: Create, view, and manage grocery orders.
- **Item Management**: Browse and manage grocery items.
- **Checkout**: Calculate and display the total cost for each user in a household.
- **Shared Costs**: Distribute the cost of groceries among household members.

## Technologies Used

- **Frontend**: React, Vite, Bootstrap, React Icons
- **Backend**: Node.js, Express, Body-Parser, CORS
- **Database**: JSON files (for prototype purposes)
- **Containerization**: Docker, Docker Compose

### Prerequisites

- Node.js (v18 or higher)
- Docker (for containerization)

### setup and Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/Tee-UX19/sepp-prototype.git
   cd sepp-prototype

   ```

2. **Install dependencies**
   npm install
   cd backend
   npm install
   cd ..

## Running the Application

### Running Locally

1.  **start the backend server:**
    cd backend
    npm start

2.  **start the frontend server:**
    cd ..
    npm run dev

3.  **Access the application**
    Open your browser and head to the address:
    http://localhost:5173.

## Dockerization

### Backend

1.  **Build the Docker image:**
    cd backend
    docker build -t backend-app .

2.  **Run docker container:**
    docker run -p 4141:4141 backend-app

### Frontend

1.  **Build the Docker image:**
    cd ..
    docker build -t frontend-app .

2.  **Run docker container:**
    docker run -p 80:80 frontend-app

# SSH Shared Grocery Delivery Service Prototype

## Introduction

This project is a prototype based on the shared grocery delivery service for Students Smart Hub. It’s a web service made with React for frontend ,styled with bootstrap and express for backend built on Vite. Users are able to browse and filter through a catalog of products from their chosen market, Add these items to a cart for a shared order, pay for each item they added and checkout the order once each person has paid via the PayPal payment gateway. By sharing orders, expenses on deliveries are saved. The finalized app has been deployed via Github Pages.

## Table of Contents

- [Introduction](#Introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Dockerization](#dockerization)
<!-- - [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license) -->



## Features
- **Order Management**: Create, view, and manage grocery orders.
- **Item Management**: Browse and manage grocery items.
- **Checkout**: Calculate and display the total cost for each user in a household.
- **Shared Costs**: Distribute the cost of groceries among household members.

## Technologies Used

- **Frontend**: React, Vite, Bootstrap, React Icons
- **Backend**: Node.js, Express, Body-Parser, CORS
- **Database**: JSON files (for prototype purposes)
- **Version Control**: Github
- **Testing**: Jest
- **Build Automation tool**: Vite
- **Dependency Management**: Package lock JSON
- **Continuous Integration & Deployment**: GIthub Actions
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
    ``` sh
   npm install
   cd backend
   npm install
   cd ..
    ```
## Running the Application

### Running Locally

1.  **start the backend server:**
    ```sh
    cd backend
    npm start
    ```

2.  **start the frontend server:**
    ```sh
    cd ..
    npm run dev
    ```

3.  **Access the application**
    Open your browser and head to the address:
    http://localhost:5173.
    

## Dockerization


1.  **Build and start containers:**
    ```sh
        docker-compose up --build #access app via localhost
    ```

2.  **Stop containers**
    ```sh
    docker-compose down
    ```



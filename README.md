# Ecommerce Application

Welcome to the Ecommerce Application! This application allows users to shop for a wide range of products through a user-friendly interface.

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Database Integration](#database-integration)
- [Authentication and Security](#authentication-and-security)
- [License](#license)

## About

The Ecommerce Application is designed to provide users with a seamless shopping experience. It includes features such as browsing products by category, adding items to the cart, and placing orders.

## Getting Started

### Prerequisites

Before you start using the Ecommerce Application, ensure you have the following prerequisites:

- [Node.js](https://nodejs.org/) installed
- [npm (Node Package Manager)](https://www.npmjs.com/) installed
- [MongoDB](https://www.mongodb.com/) (or MongoDB Atlas) for database integration
- Basic knowledge of JavaScript

### Installation

To get the application up and running, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/uday510/EcommerceApplication.git
   

2. Install dependencies:

    ```bash
    npm install

3. Start the application:

    ```bash
    nodemon start
    
### Usage

To use the Ecommerce Application, follow these steps:

Access the application through your web browser at http://localhost:4000.

Browse products, add items to your cart, and place orders.

### API Documentation

The Ecommerce Application provides a set of RESTful APIs for managing products, categories, and user carts. Detailed API documentation can be found here.

### Database Integration

The application is integrated with MongoDB (or MongoDB Atlas), a cloud-based database service. It stores product data, user information, and order history. The database schema and models can be found in the models directory.


## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details.



## Authentication and Security

User authentication is implemented using JWT (JSON Web Tokens) for secure API access. User passwords are securely hashed and stored in the database.



## Category Routes

Here are the routes related to categories APIs.

### Create a New Category

- **Route**: `POST /api/v1/categories`
- **Description**: Create a new category.
- **Example**:
  ```http
  POST /api/v1/categories
  Content-Type: application/json
  
  Request
  {
    "name": "electronics",
  }
  Response
      {
    "name": "electronics",
    "_id": "64e506a6815cfad84b02260a",
    "__v": 0
    }
  
  
### Retrieve All Categories
- **Route**: `GET /api/v1/categories`
- **Description**: Retrieve a list of all categories.
- **Example**:
  
  ```http
  GET /api/v1/categories
  Content-Type: application/json

   Response
          [
    {
        "id": "64e506a6815cfad84b02260a",
        "name": "electronics"
    },
    {
        "id": "64e506b2815cfad84b02260e",
        "name": "clothing"
    },
    {
        "id": "64e506c9815cfad84b022610",
        "name": "books"
    },
    {
        "id": "64e506d5815cfad84b022612",
        "name": "sports"
    }
    ]

### Retrieve Category by ID
- **Route**: `GET /api/v1/categories/:categoryId`
- **Description**: Retrieve a category
- **Example**:

    ```http
  GET /api/v1/categories
  Content-Type: application/json

  Response
    {
    "_id": "64e506b2815cfad84b02260e",
    "name": "clothing",
    "__v": 0
    }

## Product Routes

Here are the routes related to products in your API.

### Create a New Product

- **Route**: `POST /api/v1/products`
- **Description**: Create a new product.
- **Example Request**:
  ```http
  POST /api/v1/products
  Content-Type: application/json

   Request
  {
    "title": "Smartphone",
    "price": 499.99,
    "description": "A high-quality smartphone.",
    "availability": true,
    "categoryId": "electronics"
  }

  Response
  {
    "title": "Smartphone",
    "price": 499.99,
    "description": "A high-quality smartphone.",
    "availability": true,
    "category": "64e506a6815cfad84b02260a",
    "_id": "64e5ba8fd35b77a0d0e431cd",
    "__v": 0
  }
  
### Retrieve All Products by Category
- **Route**: `GET /api/v1/products`
- **Description**: Retrieve a list of all products within a specific category.
- **Example**:
  ```http
    Response
      {
    "electronics": [
        {
            "_id": "64e50e8f7b762080260b6f18",
            "title": "iPhone 13 Pro",
            "price": 999.99,
            "description": "The latest iPhone with advanced features.",
            "availability": true,
            "category": "64e506a6815cfad84b02260a",
            "__v": 0
        },
    ],
    "clothing": [
        {
            "_id": "64e50ea37b762080260b6f20",
            "title": "Men's Slim-Fit Shirt",
            "price": 29.99,
            "description": "Classic slim-fit shirt for men.",
            "availability": true,
            "category": "64e506b2815cfad84b02260e",
            "__v": 0
        },
    ],
    "books": [
        {
            "_id": "64e50e777b762080260b6f10",
            "title": "The Great Gatsby (Book)",
            "price": 9.99,
            "description": "A classic novel by F. Scott Fitzgerald.",
            "availability": true,
            "category": "64e506c9815cfad84b022610",
            "__v": 0
        },
    ],
    "sports": [],
    "beauty": [
        {
            "_id": "64e50df48fb10484e307f460",
            "title": "Skin Moisturizer",
            "price": 14.99,
            "description": "Hydrating moisturizer for all skin types.",
            "availability": true,
            "category": "64e506dc815cfad84b022614",
            "__v": 0
        },
    ],
    "games": [],
    "health": [],
    "food": [],
    "automotive": [],
    "pets": []
    }

### Retrieve a Single Product by ID
- **Route**: `GET /api/v1/products/:productId`
- **Description**: Retrieve a single product
- **Example**:
    ```http
    Response
    {
    "_id": "64e50e8f7b762080260b6f18",
    "title": "iPhone 13 Pro",
    "price": 999.99,
    "description": "The latest iPhone with advanced features.",
    "availability": true,
    "category": "64e506a6815cfad84b02260a",
    "__v": 0
    }

## Authentication Routes

Routes related to user authentication

### Sign Up

- **Route**: `POST /app/api/v1/auth/signup`
- **Description**: Create a new user account.
- **Example**:
  ```http
  POST /app/api/v1/auth/signup
  Content-Type: application/json

  Request

  {
    "name": "uday teja",
    "userId": "uday",
    "email": "uday@email.com",
    "password": "most_secure_password"
  }
  
  Response
  {
    "message": "User created successfully",
    "data": {
        "name": "uday teja",
        "userId": "uday",
        "email": "uday@email.com"
    }
  }
  
### Sign In
- **Route**: `POST /app/api/v1/auth/signin`
- **Description**: Sign in as an existing user.
- **Example**:
   ```http
  POST /app/api/v1/auth/signin
  Content-Type: application/json

   Request 
   {
    "userId": "uday",
    "password": "Budd@12344"
    }

   Response
   {
    "message": "Token sent successfully",
    "name": "uday teja",
    "userId": "uday",
    "email": "uday@gmail.com",                
    "accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVkYXkiLCJpYXQiOjE2OTI3ODAyODYsImV4cCI6MTY5Mjc4MDg4Nn0"
    }
## Cart Routes

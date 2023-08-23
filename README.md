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

- **Route**: `POST /api/v1/category`
- **Description**: Create a new category.
- **Example**:
  ```http
  POST /api/v1/category
  Content-Type: application/json
  
  - Request
  {
    "name": "electronics",
  }
  - Response
      {
    "name": "electronics",
    "_id": "64e506a6815cfad84b02260a",
    "__v": 0
    }
  
  
### Retrieve All Categories
- **Route**: GET /api/v1/category
- **Description**: Retrieve a list of all categories.
- **Example**:
  
  ```http
  GET /api/v1/category
  Content-Type: application/json

  - Response
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

### Retrieve  Categorie by ID
- **Route**: GET /api/v1/category/:categoryId
- **Description**: Retrieve a category
- **Example**:

    ```http
  GET /api/v1/category
  Content-Type: application/json

  - Response
    {
    "_id": "64e506b2815cfad84b02260e",
    "name": "clothing",
    "__v": 0
    }

## Product Routes

Here are the routes related to products in your API.

### Create a New Product

- **Route**: `POST /api/v1/product`
- **Description**: Create a new product.
- **Example Request**:
  ```http
  POST /api/v1/product
  Content-Type: application/json

   -Request-
  {
    "title": "Smartphone",
    "price": 499.99,
    "description": "A high-quality smartphone.",
    "availability": true,
    "categoryId": "electronics"
  }

  -Response-
  {
    "title": "Smartphone",
    "price": 499.99,
    "description": "A high-quality smartphone.",
    "availability": true,
    "category": "64e506a6815cfad84b02260a",
    "_id": "64e5ba8fd35b77a0d0e431cd",
    "__v": 0
  }
  


    

    





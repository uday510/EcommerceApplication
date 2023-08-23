# EcommerceApplication

# Category Listing API

This API endpoint allows you to retrieve a list of categories.

## API Endpoint

- **GET** `http://localhost:4000/api/v1/category`

## Description

This endpoint returns a JSON list of categories. Each category object contains an `id` and a `name`.

## Usage

To retrieve the list of categories, send a GET request to the `http://localhost:4000/api/v1/category` endpoint.

Example request using cURL:

```bash
curl -X GET http://localhost:4000/api/v1/category

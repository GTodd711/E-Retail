# E-Retail

## Description

## Usage

*GET All Tags:
**Method: GET
URL: http://localhost:your_port/api/tags
Headers: (leave empty)
Content-Type: application/json
Body: (leave empty)
GET Tag by ID:

**Method: GET
URL: http://localhost:your_port/api/tags/id
Replace :id with the actual ID of the tag you want to fetch.
Headers: (leave empty)
Content-Type: application/json
Body: (leave empty)
Create a New Tag:

**Method: POST
URL: http://localhost:your_port/api/tags
Headers:
Content-Type: application/json
Body:
json
Copy code
{
  "tag_name": "New Tag Name"
}
Replace "New Tag Name" with the desired tag name.
Update a Tag by ID:

**Method: PUT
URL: http://localhost:your_port/api/tags/id
Replace :id with the actual ID of the tag you want to update.
Headers:
Content-Type: application/json
Body:
json
Copy code
{
  "tag_name": "Updated Tag Name"
}
Replace "Updated Tag Name" with the new tag name.
Delete a Tag by ID:

**Method: DELETE
URL: http://localhost:your_port/api/tags/id
Replace :id with the actual ID of the tag you want to delete.
Headers: (leave empty)
Content-Type: application/json
Body: (leave empty)

*GET All Products:

**Method: GET
URL: http://localhost:3001/api/products
Body: (leave empty)
GET One Product:

**Method: GET
URL: http://localhost:3001/api/products/id
Replace :id with the actual ID of the product you want to retrieve.
Body: (leave empty)
Create New Product:

**Method: POST
URL: http://localhost:3001/api/products
Body:
json
Copy code
{
  "product_name": "Your Product Name",
  "price": 19.99,
  "stock": 50,
  "category_id": 1,
  "tagIds": [1, 2, 3] 
}
Adjust the values as per your actual product details and tag IDs.
Update Product:

**Method: PUT
URL: http://localhost:3001/api/products/id
Replace :id with the actual ID of the product you want to update.
Body:
json
Copy code
{
  "product_name": "Updated Product Name",
  "price": 29.99,
  "stock": 100,
  "category_id": 2,
  "tagIds": [4, 5] 
}
Replace the values with the updated information you want to apply to the product.
Delete Product:

**Method: DELETE
URL: http://localhost:3001/api/products/id
Replace :id with the actual ID of the product you want to delete.
Body: No body required for DELETE requests.

*GET All Categories:

Method: GET
URL: http://localhost:3001/api/categories
Body: (leave empty)
GET One Category:

**Method: GET
URL: http://localhost:3001/api/categories/id
Replace :id with the actual ID of the category you want to retrieve.
Body: (leave empty)
Create New Category:

**Method: POST
URL: http://localhost:3001/api/categories
Body:
json
Copy code
{
  "category_name": "Your Category Name"
}
Adjust the value for category_name with the name of the category you want to create.
Update Category:

**Method: PUT
URL: http://localhost:3001/api/categories/id
Replace :id with the actual ID of the category you want to update.
Body:
json
Copy code
{
  "category_name": "Updated Category Name"
}
Replace the value for category_name with the updated name of the category.
Delete Category:

**Method: DELETE
URL: http://localhost:3001/api/categories/id
Replace :id with the actual ID of the category you want to delete.
Body: (leave empty)
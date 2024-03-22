# E-Retail

## Description
The E-Retail Management System is a web application designed to manage products, categories, and tags for an e-commerce platform. It provides RESTful API endpoints for performing CRUD (Create, Read, Update, Delete) operations on products, categories, and tags, allowing seamless management of the e-retail store's inventory.
## features
>Products Management: Create, update, delete, and retrieve product information including name, price, stock, category association, and tags.
>Categories Management: Manage product categories with CRUD operations, ensuring organized catalog management.
>Tags Management: Add tags to products to enhance searchability and categorization, with the ability to create, update, delete, and retrieve tags.
>Database Integration: Utilizes Sequelize ORM (Object-Relational Mapping) for seamless database interactions, supporting MySQL for efficient data storage and retrieval.
>Express.js Framework: Built on the Express.js framework for handling HTTP requests and routing, providing a robust backend structure.
>Handlebars.js Templating: Implements Handlebars.js for rendering dynamic HTML templates, enhancing the user interface and experience.
>Environment Configuration: Uses dotenv for environment variable management, ensuring secure and flexible application configuration.
## Installation
Clone the repository to your local machine:
>bash
git clone https://github.com/yourusername/e-retail-management.git

Navigate to the project directory:
>bash
cd e-retail-management
Install dependencies using npm:
npm install

Configure environment variables:
Create a .env file in the project root.
Define environment variables such as database connection details (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) and server port (PORT).
Initialize the database:
Optionally, seed the database with initial data:
>bash

npm run seed
Start the server:
>sql
npm start

Access the application:
Open insomnia and navigate to http://localhost:3001 to access the API endpoints and interact with the E-Retail Management System.
## Usage

>GET All Tags:
>>Method: GET
URL: http://localhost:your_port/api/tags
Headers: (leave empty)
Content-Type: application/json
Body: (leave empty)
GET Tag by ID:

>>Method: GET
URL: http://localhost:your_port/api/tags/id
Replace :id with the actual ID of the tag you want to fetch.
Headers: (leave empty)
Content-Type: application/json
Body: (leave empty)
Create a New Tag:

>>Method: POST
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

>>Method: PUT
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

>>Method: DELETE
URL: http://localhost:your_port/api/tags/id
Replace :id with the actual ID of the tag you want to delete.
Headers: (leave empty)
Content-Type: application/json
Body: (leave empty)

>GET All Products:

>>Method: GET
URL: http://localhost:3001/api/products
Body: (leave empty)
GET One Product:

>>Method: GET
URL: http://localhost:3001/api/products/id
Replace :id with the actual ID of the product you want to retrieve.
Body: (leave empty)
Create New Product:

>>Method: POST
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

>>Method: PUT
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

>>Method: DELETE
URL: http://localhost:3001/api/products/id
Replace :id with the actual ID of the product you want to delete.
Body: No body required for DELETE requests.

>GET All Categories:

>>Method: GET
URL: http://localhost:3001/api/categories
Body: (leave empty)
GET One Category:

>>Method: GET
URL: http://localhost:3001/api/categories/id
Replace :id with the actual ID of the category you want to retrieve.
Body: (leave empty)
Create New Category:

>>Method: POST
URL: http://localhost:3001/api/categories
Body:
json
Copy code
{
  "category_name": "Your Category Name"
}
Adjust the value for category_name with the name of the category you want to create.
Update Category:

>>Method: PUT
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

>>Method: DELETE
URL: http://localhost:3001/api/categories/id
Replace :id with the actual ID of the category you want to delete.
Body: (leave empty)

## Technologies Used 
Node.js
Express.js
Sequelize ORM
MySQL
Handlebars.js
dotenv

## Contributers 
expert learning assitant 
stackoverflow

## license 
N/A
# SQL Project: Customers, Products, and Orders Management

## About
This folder demonstrates SQL commands to manage a simple database system for customers, products, and orders. It includes creating tables, inserting data, updating records, and performing inner joins to analyze relationships.

## Features
This project covers the following SQL operations:
1. **Creating Tables**
   - `customers`: Stores customer information such as ID, name, and address.
   - `products`: Stores product details like ID, name, price, and stock quantity.
   - `orders`: Represents transactions linking customers and products.
2. **Inserting Data**
   - Populating tables with initial records for customers, products, and orders.
3. **Updating Data**
   - Adjusting product prices and stock levels.
4. **Deleting Data**
   - Removing records (e.g., a product) and reinserting them.
5. **Adding Columns**
   - Adding a `stock` column to the `products` table.
6. **Performing Joins**
   - Joining `orders` and `customers` tables to fetch customer details for orders.
   - Joining `orders` and `products` tables to fetch product details for orders.

## Files
- `dump.sql`: SQL script that contains all the commands used in this project.

## Example Outputs
### Customers Table
Query to fetch specific customer:
```sql
SELECT * FROM customers WHERE first_name = 'John';
```
Expected result:
| id | first_name | last_name | address          |
|----|------------|-----------|------------------|
| 1  | John       | Doe       | 32 Cherry Blvd   |

### Products Table
Query to fetch all products:
```sql
SELECT * FROM products;
```
Expected result:
| id | name         | price | stock |
|----|--------------|-------|-------|
| 1  | Pen          | 1.20  | 32    |
| 2  | Pencil       | 0.80  | 12    |
| 3  | Notebook     | 5.50  | 50    |
| 4  | Eraser       | 0.50  | 100   |
| 5  | Ruler        | 1.00  | 75    |
| 6  | Highlighter  | 2.20  | 40    |
| 7  | Marker       | 3.00  | 60    |

## Conclusion
This project demonstrates fundamental SQL operations to manage a relational database effectively. It includes creating relationships between tables and handling data through various queries and modifications. It provides a great foundation for working with relational databases and can be expanded for more complex scenarios.
# SQL Exercise: Products Table

## About
This repository contains an SQL exercise showcasing table creation, data insertion, updates, and deletions.

## Files
- `dump.sqlite.sql`: SQL script for creating, updating, and managing the `products` table.
- `products.db.json`: JSON file showing the final state of the `products` table before deletion.

## Features
The SQL script demonstrates the following:
1. Creating a `products` table with fields for `id`, `name`, `price`, and `stock`.
2. Inserting initial data into the table.
3. Updating existing data:
   - Adjusting product prices.
   - Adding a new column `stock`.
   - Setting stock values for existing products.
4. **Deleting data:**
   - Removing the product with `id = 2` (Pencil) from the table.

## How to Use
1. Run the SQL commands in `dump.sqlite.sql` on your preferred SQL database to create and manage the `products` table.
2. Use `products.db.json` as a reference or for additional data testing.
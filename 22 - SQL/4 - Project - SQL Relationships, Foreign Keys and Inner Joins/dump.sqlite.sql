-- create customers table
CREATE TABLE customers (
  id INT,
  first_name STRING,
  last_name STRING,
  address STRING,
  PRIMARY KEY (id)
);

-- insert some values
INSERT INTO customers VALUES (1, 'John', 'Doe', '32 Cherry Blvd');
INSERT INTO customers VALUES (2, 'Julia', 'Souza', '12 Sunset Drive');
INSERT INTO customers VALUES (3, 'Alice', 'Johnson', '45 Oak Street');
INSERT INTO customers VALUES (4, 'Michael', 'Smith', '78 Pine Avenue');
INSERT INTO customers VALUES (5, 'Emma', 'Williams', '90 Maple Lane');
INSERT INTO customers VALUES (6, 'Robert', 'Brown', '21 Birch Road');
INSERT INTO customers VALUES (7, 'Sophia', 'Taylor', '33 Elm Court');

-- fetch some values
SELECT * FROM customers WHERE first_name = 'John';

-- create the products table
CREATE TABLE products (
    id INT NOT NULL,
    name STRING,
    price MONEY,
    PRIMARY KEY (id)
);

--insert a product into products table
INSERT INTO products VALUES (1, 'Pen', 1.20);

-- select a product with id = 1
SELECT * FROM products WHERE id = 1;

--insert a product with no price into products table
INSERT INTO products (id, name) VALUES (2, 'Pencil');

--select a product with id = 2
SELECT * FROM products WHERE id = 2;

--update a row in products table
UPDATE products SET price=0.8 WHERE id = 2;

--select all records from products table
SELECT * FROM products;

--add a new column - stock to the products table
ALTER TABLE products ADD stock INT;

--update a row in products table
UPDATE products SET stock=32 WHERE id = 1;

--select all records from products table
SELECT * FROM products;

--update a row in products table
UPDATE products SET stock=12 WHERE id = 2;

--select all records from products table
SELECT * FROM products;

--delete a row from products table
DELETE FROM products WHERE id = 2;

--insert back the deleted row into products table
INSERT INTO products VALUES (2, 'Pencil', 0.8, 12);

-- Inserting more products into the 'products' table
INSERT INTO products (id, name, price, stock)
VALUES 
  (3, 'Notebook', 5.5, 50),          -- Notebook priced at 5.5 with 50 in stock
  (4, 'Eraser', 0.5, 100),           -- Eraser priced at 0.5 with 100 in stock
  (5, 'Ruler', 1.0, 75),             -- Ruler priced at 1.0 with 75 in stock
  (6, 'Highlighter', 2.2, 40),       -- Highlighter priced at 2.2 with 40 in stock
  (7, 'Marker', 3.0, 60);            -- Marker priced at 3.0 with 60 in stock

-- create the orders table
CREATE TABLE orders (
  id INT NOT NULL,
  order_number INT,
  customer_id INT,
  product_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

--insert orders into orders table
INSERT INTO orders VALUES (2, 5678, 1, 3); -- Order by customer 1 for product 3 (Notebook)
INSERT INTO orders VALUES (1, 4362, 2, 1); -- Order by customer 2 for product 1 (Pen)
INSERT INTO orders VALUES (8, 6543, 2, 4); -- Order by customer 2 for product 4 (Eraser)
INSERT INTO orders VALUES (3, 7890, 3, 4); -- Order by customer 3 for product 4 (Eraser)
INSERT INTO orders VALUES (4, 1234, 4, 5); -- Order by customer 4 for product 5 (Ruler)
INSERT INTO orders VALUES (5, 4321, 5, 6); -- Order by customer 5 for product 6 (Highlighter)
INSERT INTO orders VALUES (6, 8765, 6, 7); -- Order by customer 6 for product 7 (Marker)
INSERT INTO orders VALUES (7, 3456, 7, 8); -- Order by customer 7 for product 8 (Glue Stick)


--join orders and customers table
SELECT orders.order_number, customers.first_name, customers.last_name, customers.address
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;

--join orders and products table
SELECT orders.order_number, products.name, products.price, products.stock
FROM orders
INNER JOIN products ON product_id = products.id;
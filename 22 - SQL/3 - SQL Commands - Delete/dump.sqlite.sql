-- TABLE
CREATE TABLE products (
  id INT NOT NULL,         -- Product ID (primary key)
  name STRING,             -- Name of the product
  price MONEY,             -- Price of the product
  stock INT,               -- Stock of the product
  PRIMARY KEY(id)          -- Defining the primary key
);

-- INSERT data into 'products'
INSERT INTO products (id, name, price)
VALUES 
  (1, 'Pen', 1.2),         -- Pen with price 1.2
  (2, 'Pencil', NULL);     -- Pencil with no price initially

-- UPDATE the price of the product with ID 2
UPDATE products 
SET price = 0.80 
WHERE id = 2;

-- ADD a new column 'stock' to the table
ALTER TABLE products 
ADD stock INT;

-- UPDATE stock for the products
UPDATE products 
SET stock = 32 
WHERE id = 1;              -- Setting stock of the pen to 32 units

UPDATE products 
SET stock = 12 
WHERE id = 2;              -- Setting stock of the pencil to 12 units

-- DELETE the product with ID 2 (Pencil)
DELETE FROM products 
WHERE id = 2;              -- Deleting the pencil from the products table
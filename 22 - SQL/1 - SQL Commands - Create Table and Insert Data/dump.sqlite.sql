-- TABLE
CREATE TABLE products (
  id INT NOT NULL,
  name STRING,
  price MONEY,
  PRIMARY KEY(id)
  );

-- INSERT data into 'products'
INSERT INTO products (id, name, price)
VALUES 
  (1, 'Pen', 1.2), 
  (2, 'Pencil', NULL);

 

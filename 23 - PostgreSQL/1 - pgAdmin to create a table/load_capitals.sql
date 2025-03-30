-- Load data from a CSV file into the capitals table in PostgreSQL
COPY capitals (id, country, capital)
FROM '/23%20-%20PostgreSQL/1%20-%20pgAdmin%20to%20create%20a%20table/capitals.csv'
DELIMITER ','
CSV HEADER;

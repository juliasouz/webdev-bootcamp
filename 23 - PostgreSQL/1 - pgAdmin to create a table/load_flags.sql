-- Load data from a CSV file into the flags table in PostgreSQL
COPY flags (id, name, flag)
FROM '/23%20-%20PostgreSQL/1%20-%20pgAdmin%20to%20create%20a%20table/flags.csv'
DELIMITER ','
CSV HEADER;
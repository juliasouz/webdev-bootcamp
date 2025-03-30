CREATE TABLE capitals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    country VARCHAR(50)
);

CREATE TABLE flags (
	id SERIAL PRIMARY KEY,
	name VARCHAR(45),
	flag TEXT
);
# Country Capitals and Flags Database

## Overview
This folder contains a PostgreSQL database exercise designed to store information about countries, their capitals, and flags. It includes:
- **`capitals` table**: Stores data on countries and their capitals.
- **`flags` table**: Stores data on countries and their flags represented as emojis.

The exercise provides scripts to create the database schema and load data from CSV files into the tables.

---

## Files Included
### SQL Scripts
- **`schema.sql`**: Defines the structure of the database, creating the `capitals` and `flags` tables.
- **`load_flags.sql`**: Loads the data from the `flags.csv` file into the `flags` table.
- **`load_capitals.sql`**: Loads the data from the `capitals.csv` file into the `capitals` table.

### CSV Files
- **`flags.csv`**: Contains country names and their flag emojis.
- **`capitals.csv`**: Contains country names and their capitals.

---

## How to Use
### Setting Up the Database
1. Install PostgreSQL and any database management tool like pgAdmin.
2. Create a new PostgreSQL database to use for this project.

### Creating the Tables
Run the following command to create the `capitals` and `flags` tables:
```bash
psql -U your_username -d your_database_name -f schema.sql
```

### Loading the Data
1. Load data into the `flags` table:
   ```bash
   psql -U your_username -d your_database_name -f load_flags.sql
   ```
2. Load data into the `capitals` table:
   ```bash
   psql -U your_username -d your_database_name -f load_capitals.sql
   ```

### Verifying the Data
To confirm the data was loaded successfully, run the following queries in pgAdmin or `psql`:
```sql
SELECT * FROM flags;
SELECT * FROM capitals;
```

---

## Example Query
Here is an example of how to join the `capitals` and `flags` tables:
```sql
SELECT capitals.name AS capital, flags.name AS country, flags.flag
FROM capitals
JOIN flags ON capitals.country = flags.name;
```
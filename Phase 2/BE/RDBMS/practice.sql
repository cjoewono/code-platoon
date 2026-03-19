DROP TABLE IF EXISTS dogs;

CREATE TABLE dogs(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    breed VARCHAR(20),
    color VARCHAR(20),
    age INTEGER
);

\COPY dogs(id, name, breed, color, age) FROM './dog_data.csv'
DELIMITER ',' CSV HEADER;
--create a database in postgres
CREATE DATABASE donation;

--creating a table in the database
CREATE TABLE cause (
    cause_id SERIAL PRIMARY KEY,
    image VARCHAR(255),
    title VARCHAR(255),
    description VARCHAR(255),
    progress NUMERIC,
    completed BOOLEAN NOT NULL DEFAULT false,
    target NUMERIC,
    amount_raised NUMERIC
);

-- updating a column in the table
UPDATE causes
SET image = 'new_image_url'
WHERE cause_id = 3;
-- Replace 3 with the actual cause_id you want to update

UPDATE cause SET amount_raised = 5000 WHERE cause_id = 1;

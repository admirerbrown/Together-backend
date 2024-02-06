-- --create a database in postgres
-- CREATE DATABASE donation;

-- --creating a table in the database
-- CREATE TABLE cause (
--     cause_id SERIAL PRIMARY KEY,
--     image VARCHAR(255),
--     title VARCHAR(255),
--     description VARCHAR(255),
--     summary VARCHAR(255),
--     progress NUMERIC,
--     completed BOOLEAN NOT NULL DEFAULT false,
--     target NUMERIC,
--     amount_raised NUMERIC
-- );

-- -- updating a column in the table
-- UPDATE causes
-- SET image = 'new_image_url'
-- WHERE cause_id = 3;
-- -- Replace 3 with the actual cause_id you want to update

-- UPDATE cause SET amount_raised = 10000 WHERE cause_id = 3;
-- UPDATE cause SET summary='This cause is meant to raise funds to build a chain of houses for orphans in Malawi, Burundi…' WHERE cause_id = 7;

-- UPDATE cause SET description ='Welcome to the House Orphans Project, a cause dedicated to providing a safe and nurturing home for orphans in need. Our mission is to raise funds to build a chain of houses in countries such as Malawi, Burundi, and beyond, where vulnerable children lack stable and secure living environments.
-- In many parts of the world, orphaned children face immense challenges, including homelessness, poverty, and exploitation. Without the support of a loving family or a stable home, these children are often left to fend for themselves, with little hope for a brighter future.
-- At the House Orphans Project, we believe that every child deserves a place to call home, where they can feel safe, loved, and supported.' WHERE cause_id = 7;


-- ALTER TABLE cause ALTER COLUMN description TYPE VARCHAR(500);
-- ALTER TABLE cause ALTER COLUMN description TYPE TEXT;


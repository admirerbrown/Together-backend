CREATE DATABASE donation;

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
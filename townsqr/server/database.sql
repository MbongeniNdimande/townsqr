CREATE DATABASE townsqr

CREATE TABLE chat(
    chat_id SERIAL PRIMARY KEY,
    message VARCHAR(255),
    tag VARCHAR(255)
);
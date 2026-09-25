#! /usr/bin/env node
require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR (255) NOT NULL,
    text VARCHAR (255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (name, text)
VALUES
('Esther', 'Hello'),
('Hamu', 'Hello, How are you?'),
('Esther', 'Am good, How about you?'),
('Hamu', 'Good! Nice to here that');
`;

async function main() {
  console.log("Seeding...!");
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

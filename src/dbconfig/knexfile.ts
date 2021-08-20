// Update with your config settings.

import Knex from "knex";
import * as dotenv from "dotenv";

dotenv.config();


const config: Knex.Config = {
  client: "pg",
  connection: {
    database: process.env.DB_NAME,
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "migrations",
  },
};

export default config
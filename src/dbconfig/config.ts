import { Pool } from "pg";
import * as dotenv from "dotenv";
dotenv.config();


export default new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
});

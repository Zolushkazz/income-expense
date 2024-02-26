import pg from "pg";
import express from "express";
import cors from "cors";
import userRouter from "./routers/userRouter.js";

const CONNECTION_STRING =
  "postgresql://zolushkazz13:uOb8zDXRTU9y@ep-cool-glade-a1hdv7wn.ap-southeast-1.aws.neon.tech/Leap%201D?sslmode=require";

export const client = new pg.Client({
  connectionString: CONNECTION_STRING,
});

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());

app.use(userRouter);

(async () => {
  await client.connect();
  await createUserTable();
  await createTableRecords();
  console.log("Connected to DB");
})();

// user table create
const createUserTable = async () => {
  const userTableCreateQuery = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    username TEXT NOT NULL
    )`;

  await client.query(userTableCreateQuery);
};

// records creating table
const createTableRecords = async () => {
  const recordsTableQuery = `CREATE TABLE IF NOT EXISTS records (
    id SERIAL PRIMARY KEY,
    userId TEXT,
    amount INT,
    category TEXT,
    date TEXT,
    time TEXT,
    payee TEXT,
    note TEXT,
    expense BOOL
  )`;
  await client.query(recordsTableQuery);
};

app.listen(8000, () => {
  console.log("http://localhost:8000");
});

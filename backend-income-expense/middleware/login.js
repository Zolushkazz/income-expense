import fs from "fs";
import { compareHash } from "../utils/password-hash.js";
import jwt from "jsonwebtoken";
import { client } from "/Users/23LP1625/Desktop/income-Expense/backend-income-expense/genIndex.js";

// const loginDb = "./models/users.json";

export const loginQuery = async (email) => {
  await client.connect();
  const loginUserQuery = `SELECT * FROM users WHERE email = $1`;
  const user = await client.query(loginUserQuery, [email]);

  await client.end();
  return user.rows[0];
};

export const loginMiddleware = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.send("Please fill all the fields");
    }
    const rows = await loginQuery(email);
    console.log(rows);

    if (!rows.length) {
      res.status(400).send("invalid email or password");
    }

    const pass = compareHash(password, rows.password);

    if (pass) {
      req.rows = rows;
      next();
      return;
    } else {
      res.status(400).send("incorrect email or password");
      return;
    }
  } catch (err) {
    res.status(400).send("Wrong password or email");
  }
};

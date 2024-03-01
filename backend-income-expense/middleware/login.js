import fs from "fs";
import { compareHash } from "../utils/password-hash.js";
import jwt from "jsonwebtoken";
import { client } from "../genIndex.js";

// const loginDb = "./models/users.json";

export const loginQuery = async (email) => {
  const loginUserQuery = `SELECT * FROM users WHERE email = $1`;
  const user = await client.query(loginUserQuery, [email]);

  return user.rows[0];
};

export const loginMiddleware = async (req, res, next) => {
  await client.connect();
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400).send("Please fill all the fields");
    }
    const rows = await loginQuery(email);

    if (!rows) {
      res.status(400).send("invalid email or password");
    }

    const pass = compareHash(password, rows.password);

    if (!pass) {
      res.status(400).send("incorrect email or password");
    } else {
      req.rows = rows;
      await client.end();
      next();
    }
  } catch (err) {
    res.status(400).send("Wrong password or email");
  }
};

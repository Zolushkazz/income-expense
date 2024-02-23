import fs from "fs";
import { compareHash } from "../utils/password-hash.js";
import jwt from "jsonwebtoken";
import { client } from "/Users/23LP1625/Desktop/income-Expense/backend-income-expense/genIndex.js";

// const loginDb = "./models/users.json";

export const loginQuery = async (email) => {
  const loginUserQuery = `SELECT * FROM users WHERE email = $1`;
  const user = await client.query(loginUserQuery, [email]);

  return user.rows;
};

export const loginMiddleware = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      res.send("Please fill all the fields");
    }

    const loggedInUser = await loginQuery(email);

    const exactLoginer = loggedInUser.find(
      (loginer) => loginer.email === email
    );

    console.log(exactLoginer);
    if (!exactLoginer) {
      res.status(400).send("invalid email or password");
    }
    const pass = compareHash(password, exactLoginer.password);
    console.log(pass);
    if (pass) {
      const token = jwt.sign(
        { email: exactLoginer.email },
        process.env.JWT_SECRET || "defaultSecret",
        { expiresIn: "1d" }
      );
      req.Token = token;
      next();
      return;
    } else {
      res.status(400).send("invalid email or password");
    }
  } catch (err) {
    res.status(400).send("Invalid password or email");
  }
};

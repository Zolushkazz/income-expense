import fs from "fs";
import { compareHash } from "../utils/password-hash.js";

const loginDb = "./models/users.json";

export const loginMiddleware = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      res.send("Please fill all the fields");
    }
    const newLoginUser = await fs.readFileSync(loginDb, "utf-8");
    const allLoginers = JSON.parse(newLoginUser);
    const exactLoginer = allLoginers.find((loginer) => loginer.email === email);

    console.log(exactLoginer);
    if (!exactLoginer) {
      throw new Error("invalid email or password");
    }
    const pass = compareHash(password, exactLoginer.password);
    console.log(pass);
    if (pass) {
    req.userData = exactLoginer
      next();
    } else {
      throw new Error("invalid email or password");
    }
  } catch (err) {
    res.send("Invalid password or email");
  }
};

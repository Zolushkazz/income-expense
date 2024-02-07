import fs from "fs";
import { makeHash } from "../utils/password-hash.js";
// import { v4 } from "uuid";
const userDb = "./models/users.json";

export const signUpUsers = async (req, res) => {
  const { email, name, password } = req.body;
  console.log({ email, name, password });
  try {
    if (!email || !name || !password) {
      return "Please fill all shields";
    }
    const newUsersJson = await fs.readFileSync(userDb, "utf-8");
    const allUsers = JSON.parse(newUsersJson);
    if (allUsers.find((user) => user.email === email)) {
      throw new Error("User already exists");
    }

    allUsers.push({
      name: name,
      email: email,
      password: makeHash(password),
    });
    await fs.writeFileSync(userDb, JSON.stringify(allUsers));
    return "success";
  } catch (error) {
    throw new Error(error.message);
  }
};

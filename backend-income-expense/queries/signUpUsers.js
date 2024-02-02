import fs, { writeFileSync } from "fs";
import { makeHash } from "../utils/password-hash.js";
// import { v4 } from "uuid";
const userDb = "./models/users.json";

export const signUpUsers = async (req, res) => {
  const { ...params } = req.body;

  try {
    if (!params.email || !params.name || !params.password) {
      return "Please fill all shields";
    }
    const newUsersJson = await fs.readFileSync(userDb, "utf-8");
    const allUsers = JSON.parse(newUsersJson);
    if (allUsers.find((user) => user.email === email)) {
      throw new Error("User already exists");
    }
    allUsers.push({
      name: params.name,
      email: params.email,
      password: makeHash(params.password),
    });
    await fs, writeFileSync(userDb, JSON.stringify(allUsers));
    return "success";
  } catch (error) {
    res.send(error.message);
  }
};

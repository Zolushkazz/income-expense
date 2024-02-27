import fs from "fs";
import { makeHash } from "../utils/password-hash.js";
import { v4 } from "uuid";
import { client } from "../genIndex.js";

// const userDb = "./models/users.json";

// table ruu data bichdeg hel
const createUserQuery = async (email, password, username) => {
  const userCreateQuery = `INSERT INTO users (email, password, username) VALUES ($1, $2, $3) RETURNING id
  `;
  const userId = await client.query(userCreateQuery, [
    email,
    makeHash(password),
    username,
  ]);

  return userId;
};

export const signUpUsers = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const userId = await createUserQuery(email, password, username);
    return userId;
  } catch (err) {
    console.log(err);
  }
};



// export const signUpUsers = async (req, res) => {
//   const { email, name, password } = req.body;
//   console.log({ email, name, password });
//   try {
//     if (!email || !name || !password) {
//       return "Please fill all shields";
//     }
//     const newUsersJson = await fs.readFileSync(userDb, "utf-8");
//     const allUsers = JSON.parse(newUsersJson);
//     if (allUsers.find((user) => user.email === email)) {
//       throw new Error("User already exists");
//     }

//     allUsers.push({
//       name: name,
//       email: email,
//       password: makeHash(password),
//     });
//     await fs.writeFileSync(userDb, JSON.stringify(allUsers));
//     return "success";
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

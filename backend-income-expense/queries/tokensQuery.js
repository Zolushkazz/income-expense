import { client } from "../genIndex.js";
import jwt from "jsonwebtoken";

const getUserQuery = `SELECT * FROM users WHERE email = $1 LIMIT 1`;

export const verifyUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      res.status(400).send("Token is not provided");
    }

    const decoded = jwt.verify(token, "defaultSecret");

    const email = decoded.email;

    const user = await client.query(getUserQuery, [email]);

    res.status(200).send(user.rows[0]);
  } catch (err) {
    console.log(err);
  }
  //bodygoor data header eer token damjdag
};

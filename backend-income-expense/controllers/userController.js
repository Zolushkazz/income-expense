//login
//signup 2l orj irne
import { signUpUsers } from "../queries/signUpUsers.js";

//signup

export const signUpController = async (req, res) => {
  try {
    const users = await signUpUsers(req);
    res.send(JSON.stringify(users));
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//login
export const loginUser = async (req, res) => {
  try {
    res.send(req.Token);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

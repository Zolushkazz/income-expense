//login
//signup 2l orj irne
import { recordsUsers } from "../queries/recordsQuery.js";
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
// export const loginUser = async (req, res) => {
//   try {
//     console.log(req);
//     console.log("asdasdasd");
//     console.log(req, "reqreqreq");
//     res.send(req.Token);
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
// };

//records
export const recordsUserController = async (req, res) => {
  try {
    const records = await recordsUsers(req);
    res.json(records);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getUser = async () => {
  //token zadlana dotroos n userId avna
};

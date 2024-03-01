import jwt from "jsonwebtoken";

export const tokenController = async (req, res) => {
  try {
    const rows = req.rows;

    const token = jwt.sign(
      { email: rows.email },
      process.env.JWT_SECRET || "defaultSecret",
      { expiresIn: "1d" }
    );

    res.status(200).send({ token, rows });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

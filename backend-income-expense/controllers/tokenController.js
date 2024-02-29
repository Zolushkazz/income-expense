import jwt from "jsonwebtoken";
export const tokenController = async (req, res) => {
  const rows = req.rows;
  const token = jwt.sign(
    { email: rows.email },
    process.env.JWT_SECRET || "defaultSecret",
    { expiresIn: "1d" }
  );
  res.send({ token, rows });
  return;

  try {
    res.send(req.Token);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

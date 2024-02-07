import jwt from "jsonwebtoken";

export const tokenCheck = (req, res, next) => {
  //   const {} = req.headers.authorization;

  const Token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjMzMyIsImlhdCI6MTcwNzE5MzIwMywiZXhwIjoxNzA3Mjc5NjAzfQ.VrCsj056ctAH40l8cRbN_XvOkrbFJyrdEZsmNvBRbiM";

  jwt.verify(
    Token,
    process.env.JWT_SECRET || "defaultSecret",
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(401).send("Provided token is invalid or expired");
      } else {
        console.log(result);
        next();
      }
    }
  );
};

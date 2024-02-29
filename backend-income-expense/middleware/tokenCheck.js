import jwt from "jsonwebtoken";

export const tokenCheck = (req, res, next) => {
  //   const {} = req.headers.authorization;

  jwt.verify(process.env.JWT_SECRET || "defaultSecret", (err, result) => {
    if (err) {
      console.log(err);
      res.status(401).send("Provided token is invalid or expired");
    } else {
      console.log(result);
      next();
    }
  });
};

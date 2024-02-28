app.post("/verify", async (req, res) => {
  const header = req.headers.authorization;

  if (!header) {
    res.status(400).send("Token is not provided");
  }
  const token = header.split(" ")[1];
  try {
    res.send(email);
  } catch (err) {
    console.log(err);
  }
  //bodygoor data header eer token damjdag
});

export const tokenController = async (req, res) => {
    try {
      res.send(req.Token);
    } catch (err) {
      res.status(400).send(err.message);
    }
  };
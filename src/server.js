const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/api/binaryTree", (req, res) => {
  const binaryTree = req.body;
  res.json(binaryTree);
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});

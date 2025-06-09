// index.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js on Railway!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

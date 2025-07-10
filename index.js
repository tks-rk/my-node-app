const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// EJS をビューエンジンとして設定
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "My Modern Site"
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

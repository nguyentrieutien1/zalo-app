const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 2000;
app.get("/", (req, res) => {
  return res.json({
    message: "Hello world",
  });
});
app.listen(PORT, () => {
  console.log("App listening on link http://localhost:" + PORT);
});

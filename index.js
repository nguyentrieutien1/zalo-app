const express = require("express");
const { Pool, Client } = require("pg");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 2000;
const pool = new Pool({
  user: "iyujgqnagrctne",
  host: "ec2-3-217-170-198.compute-1.amazonaws.com",
  database: "d1ec0p4292rfhh",
  password: "460d2959c218f515fac23ac7e59d2f6f7f460736c16f302c98644ba89395305e",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});
pool.connect().then(() => {
  console.log(`connect success`);
});
app.get("/", async (req, res) => {
  pool.query("select * from public.account", (e, r) => {
    if (e) return;
    return res.json({
      res: r.rows[0].username,
    });
  });
});
app.listen(PORT, () => {
  console.log("App listening on link http://localhost:" + PORT);
});

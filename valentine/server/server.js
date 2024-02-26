const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/ask", (req, res) => {
  res.json({ message: "hello" });
});

app.listen(8000, () => {
  console.log("server is running");
});

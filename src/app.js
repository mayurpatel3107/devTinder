console.log("Starting a new project");

const express = require("express");

const app = express();
app.use("/", (req, res) => {
  res.send("Namasate From the dashboard !!!");
});
app.use("/hello", (req, res) => {
  res.send("HEllo ,  HEllo !!!");
});

app.use("/lassan", (req, res) => {
  res.send("Hello from the Server");
});
app.listen(3000, () =>
  console.log("Server is Successfully Listening on port 3000")
);

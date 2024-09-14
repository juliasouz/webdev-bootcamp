import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading the HTML file");
      return;
    }
    res.send(data);
  });
});

app.post("/register", (req, res) => {
  const userData = req.body;
  console.log("User Data:", userData);
  res.sendStatus(201);
});

app.put("/user/julia", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/julia", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/julia", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

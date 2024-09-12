import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
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
  //Deleting
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

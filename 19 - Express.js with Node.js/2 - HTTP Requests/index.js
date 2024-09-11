import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to My Website</h1>");
});

app.get("/about", (req, res) => {
  res.send(`
    <h1>About Me</h1>
    <p>My name is Julia, and I am a web developer with a passion for creating dynamic and responsive web applications.</p>
  `);
});

app.get("/contact", (req, res) => {
  res.send(`
    <h1>Contact Me</h1>
    <p>If you would like to get in touch, please reach out via phone or email.</p>
    <ul>
      <li>Phone: +5551923456789</li>
      <li>Email: julia@example.com</li>
    </ul>
  `);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

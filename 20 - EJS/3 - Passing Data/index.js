import express from "express";
import bodyParser from "body-parser";
import { body, validationResult } from "express-validator";
import rateLimit from "express-rate-limit";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

const nameValidation = [
  body('fName')
    .trim()
    .isLength({ min: 1, max: 50 }).withMessage('First name must be between 1 and 50 characters')
    .matches(/^[A-Za-z\s-']+$/).withMessage('First name can only contain letters, spaces, hyphens, and apostrophes'),
  body('lName')
    .trim()
    .isLength({ min: 1, max: 50 }).withMessage('Last name must be between 1 and 50 characters')
    .matches(/^[A-Za-z\s-']+$/).withMessage('Last name can only contain letters, spaces, hyphens, and apostrophes')
];

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('index.ejs', { 
    error: 'Something went wrong! Please try again.' 
  });
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", nameValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('index.ejs', {
        errors: errors.array(),
        oldInput: {
          fName: req.body.fName,
          lName: req.body.lName
        }
      });
    }

    const fName = req.body.fName.trim();
    const lName = req.body.lName.trim();
    const numLetters = fName.length + lName.length;

    const stats = {
      numberOfLetters: numLetters,
      firstNameLength: fName.length,
      lastNameLength: lName.length,
      totalWords: (fName.split(' ').length + lName.split(' ').length),
      hasSpace: fName.includes(' ') || lName.includes(' ')
    };

    res.render("index.ejs", { stats });
  } catch (error) {
    next(error);
  }
});

// API endpoint for AJAX requests
app.post("/api/calculate", nameValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const fName = req.body.fName.trim();
    const lName = req.body.lName.trim();
    const numLetters = fName.length + lName.length;

    res.json({
      numberOfLetters: numLetters,
      firstNameLength: fName.length,
      lastNameLength: lName.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const posts = req.app.locals.posts || [];
  res.render('index', { posts });
});

module.exports = router;
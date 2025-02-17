const express = require('express');
const path = require('path');
const app = express();

const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.locals.posts = [];

app.use('/', indexRouter);
app.use('/posts', postsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
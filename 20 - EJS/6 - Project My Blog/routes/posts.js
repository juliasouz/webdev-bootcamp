const express = require('express');
const router = express.Router();

let posts = [];

router.get('/new', (req, res) => {
    res.render('create');
});

router.post('/', (req, res) => {
    const post = {
        id: Date.now().toString(),
        title: req.body.title,
        content: req.body.content
    };
    posts.push(post);
    req.app.locals.posts = posts;
    res.redirect('/');
});

router.get('/edit/:id', (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    res.render('edit', { post });
});

router.post('/edit/:id', (req, res) => {
    const index = posts.findIndex(p => p.id === req.params.id);
    if (index !== -1) {
        posts[index].title = req.body.title;
        posts[index].content = req.body.content;
    }
    res.redirect('/');
});

module.exports = router;
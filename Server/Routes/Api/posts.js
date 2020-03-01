const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//get posts
router.get('/', (req, res) => {
    const posts = await
    res.send('hello');
});

//add posts
router.post('/', (req, res) => {
    const posts = await
})

//updat post


//delete post

module.exports = router;
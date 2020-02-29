const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//get posts
router.get('/', (req, res) => {
    res.send('hello');
});

//add posts


//updat post


//delete post

module.exports = router;
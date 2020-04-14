const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Post
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}));
});

// Add Post


// Delete Post



async function loadPostsCollection {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://moadij:m&m082518@cluster0-lpztk.mongodb.net/test?retryWrites=true&w=majority', 
   
    {useNewUrlParser: true}
    
    );

    return client.db('vue_express').collection('posts');
}

module.exports = router;
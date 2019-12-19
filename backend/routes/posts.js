const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({
      message: error
    });
  }
});

router.post("/", async (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content
  });

  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (error) {
    res.json({
      message: error
    });
  }
});


router.delete("/:id", async (req, res) => {
  const postId = req.params.id;

  try {
    const deletePost = await Post.deleteOne({
      _id: postId
    });
    res.json(deletePost)
  } catch (error) {
    res.json({
      message: error
    });
  }
});


module.exports = router;
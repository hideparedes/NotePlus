const express = require("express");
const router = express.Router();

const Note = require("../models/Note");

router.get("/", async (req, res) => {
  try {
    const notes = await Post.find();
    res.send(notes);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {

  const {
    title,
    content
  } = req.body;

  try {
    const newNote = new Note({
      title,
      content,
      user: req.body.user
    })

    await newNote.save();
    res.send(newNote);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

router.put("/:id", async (req, res) => {
  const {
    title,
    content
  } = req.body;

  try {
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(400).send("Note not found");

    note = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content
    })

    res.send("Succesfully updated")

  } catch (error) {

  }
})

router.delete("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id)

    if (!note) return res.status(400).send("Note not found");

    await Note.findByIdAndRemove(req.params.id);

    res.send("Note deleted");
  } catch (error) {
    res.status(500).send("Server Error");
  }
});


module.exports = router;
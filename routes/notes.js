const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  inputValidation
} = require("../validation")
const Note = require("../models/Note");

router.get("/", auth, async (req, res) => {
  try {
    const notes = await Note.find({
      user: req.user.id
    });

    // console.log(notes[0].user.toString() === req.user.id);


    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", auth, async (req, res) => {
  const {
    error
  } = inputValidation(req.body);
  if (error) return res.status(400).json({
    message: error.details[0].message
  });

  const {
    title,
    content
  } = req.body;

  try {
    const newNote = new Note({
      title,
      content,
      user: req.user.id
    });

    await newNote.save();
    res.json(newNote);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.put("/:id", auth, async (req, res) => {
  const {
    title,
    content
  } = req.body;

  try {
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({
        message: "Item not found"
      });
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not authorized"
      })
    }

    note = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content
    }, {
      new: true
    });

    res.json(note);
  } catch (error) {
    console.error(error.message);

    res.status(500).send("Server Error")
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({
        message: "Item not found"
      });
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not authorized"
      })
    }

    await Note.findByIdAndRemove(req.params.id);

    res.json({
      message: "Item deleted"
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth")
const User = require("../models/User");
const {
  registerValidation,
  loginValidation
} = require("../validation");

router.get("/auth", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error")
  }
})

router.post("/register", async (req, res) => {
  const {
    error
  } = registerValidation(req.body);
  if (error) return res.status(400).json({
    message: error.details[0].message
  });

  const {
    name,
    email,
    password
  } = req.body;

  try {
    let user = await User.findOne({
      email
    });

    if (user) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    user = new User({
      name,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.json({
      toke,
      user: user.name
    })
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error);
  }
});

router.post("/login", async (req, res) => {
  const {
    error
  } = loginValidation(req.body);

  if (error) return res.status(400).json({
    message: error.details[0].message
  });

  const {
    email,
    password
  } = req.body;

  try {
    let user = await User.findOne({
      email
    });

    if (!user) return res.status(404).json({
      message: "No user found with that email"
    });

    const matchPass = await bcrypt.compare(password, user.password);

    if (!matchPass) return res.status(400).json({
      message: "Wrong password"
    });

    const payload = {
      user: {
        id: user._id
      }
    }

    jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h"
    }, (err, token) => {
      if (err) {
        return console.error(err.message);
      }
      res.json({
        token,
        user: user.name
      })

    });

  } catch (error) {
    console.error(error.message);
    res.status(500).send(error);
  }
});

module.exports = router;
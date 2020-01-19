const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const { registerValidation, loginValidation } = require("../validation");

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).send("Email already exists");
    }

    user = new User({
      name,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.send("Register Success");
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) return res.status(400).send("No user found with that email");

    const matchPass = await bcrypt.compare(password, user.password);

    if (!matchPass) return res.status(400).send("Wrong password");

    res.send("Login Success");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const connection = require("../../../db");
require("dotenv").config();
var bcrypt = require("bcryptjs");

connection();

router.post("/register", async (req, res) => {
    try {
      const { username, password, email, number, role } = req.body;
  
      const user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ success: false, message: "User already exists" });
      }
      //hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        username,
        password: hashedPassword,
        email,
        number,
        role,
      });
  
      await newUser.save();
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

module.exports = router;

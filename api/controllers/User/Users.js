const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const connection = require("../../../db");
require("dotenv").config();

connection();

router.get("/users", async (req, res) => {
    try {
      const users = await User.find().limit(2);
      res.status(200).json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

module.exports = router;

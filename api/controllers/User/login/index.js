const express = require("express");
const router = express.Router();
const User = require("../../../models/User");
const connection = require("../../../../db");
require("dotenv").config();
var bcrypt = require("bcryptjs");
const { createToken } = require("../../../../middleware/auth");

connection();

router.post("/", async (req, res) => {
  try {
      console.log("Successfuly");
      
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

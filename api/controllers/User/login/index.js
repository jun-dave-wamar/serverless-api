const express = require("express");
const router = express.Router();
const User = require("../../../models/User");
const connection = require("../../../../db");
var bcrypt = require("bcryptjs");

connection();

router.post("/", async (req, res) => {a
  try {
    const { username, password } = req.body;

    // Check if user already exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const payload = {
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    };
    res.status(200).json({ success: true, user: payload.user});
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

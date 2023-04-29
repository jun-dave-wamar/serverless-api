const express = require("express");
const router = express.Router();
var bcrypt = require("bcryptjs");
const User = require("../../../models/User");

const { createToken } = require("../../../../middleware/auth");



router.post("/", async (req, res) => {
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
    const token = await createToken(payload, res);

    res.status(200).json({ success: true, user: payload.user, token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

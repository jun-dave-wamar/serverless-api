const jwt = require("jsonwebtoken");
require("dotenv").config();


// Create token
const createToken = (payload, res) => {
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" });
  res.cookie("token", token, {
    httpOnly: true,
    withCredentials: true,
    sameSite: "strict",
    maxAge: 3600000, // 1 hour
  });
  return token;
}

// Validate token
const validateToken = async (req, res, next) => {
  try {
    const token = req.cookies["token"];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    if (decodedToken.user.role !== "admin") {
      return res
        .status(401)
        .json({ message: "Unauthorized access" });
    }
   // token is still valid
   refreshToken(decodedToken, res); // add decoded token to the request object
   next();
  

  } catch (err) {
    console.error(err);
    res.status(401).json({ message: err.message });
  }
};

// Create new token
const refreshToken = (decodedToken, res) => {
  const now = Date.now() / 1000; // convert milliseconds to seconds
  decodedToken.exp = now + 3600; // set the expiration time to 1 hour from now
  const newToken = jwt.sign(decodedToken, process.env.SECRET_KEY);
  const options = {
    httpOnly: true,
    withCredentials: true,
    sameSite: "strict",
    maxAge: 3600000, // 1 hour
  };
  res.clearCookie("token"); // clear the previous cookie
  res.cookie("token", newToken, options); // set the new cookie
  return newToken;
};

module.exports = { createToken, validateToken };

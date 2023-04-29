const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();

const corsOptions = {
  //origin: ["http://localhost:3001", "http://localhost:3000"],
  origin: ["https://v001.are-ai.ae", "https://v001.are-ai.ae/", "https://are-ai.ae", "https://are-ai.ae/"],
  method: ["GET", "POST", "PATCH", "PUT", "HEAD", "OPTIONS"],
  credentials: true,
};

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());

//Import Controllers
const {validateToken} = require("./middleware/auth");
const Login = require("./api/controllers/User/Login");
const Register = require("./api/controllers/User/Register");
const Users = require("./api/controllers/User/Users");
const Logout = require("./api/controllers/User/Logout");

//Routes
app.use("/api/login", Login);
app.use("/api/register", Register);
app.use("/api/logout", Logout);
app.use("/api/users",validateToken, Users);




app.get("/", async (req, res) => {
  res.json({
    message: "Please contact info@are-ai.ae for authorization",
    Contact: "info@are-ai.ae",
  });
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});

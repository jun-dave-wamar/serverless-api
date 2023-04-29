const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();

const corsOptions = {
  origin: ["http://localhost:3001", "http://localhost:3000"],
  // origin: ["https://v001.are-ai.ae", "https://v001.are-ai.ae/", "https://are-ai.ae", "https://are-ai.ae/"],
  method: ["GET", "POST", "PATCH", "PUT", "HEAD", "OPTIONS"],
  credentials: true,
};

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());


//Middleware Authentication
const {validateToken} = require("./middleware/auth");

//Import Controllers
const {login, register, getUsers, logout} = require("./api/controllers/User");
const {getProduct, postProduct} = require("./api/controllers/Product");

//Routes
app.post("/api/login", login);
app.post("/api/register", register);
app.post("/api/products", validateToken, postProduct);

app.get("/api/products", validateToken, getProduct);
app.get("/api/logout", logout);
app.get("/api/users", validateToken, getUsers);


app.get("/", async (req, res) => {
  res.json({
    message: "Please contact info@are-ai.ae for authorization",
    Contact: "info@are-ai.ae",
  });
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});

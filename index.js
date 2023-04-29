const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();


//Import Controllers
const login = require("./api/controllers/User/login/index");


const corsOptions = {
  //origin: ["http://localhost:3001", "http://localhost:3000"],
  origin: ["https://v001.are-ai.ae", "https://v001.are-ai.ae/", "https://are-ai.ae", "https://are-ai.ae/"],
  method: ["GET", "POST", "PATCH", "PUT", "HEAD", "OPTIONS"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

//Routes
app.use("/api/login", login);





app.get("/", async (req, res) => {
  res.json({
    message: "Please contact info@are-ai.ae for authorization",
    Contact: "info@are-ai.ae",
  });
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});

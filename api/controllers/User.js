const express = require("express");
const  User = require("../models/user");
const connection = require("../../db");
require("dotenv").config();
var bcrypt = require("bcryptjs")
const {createToken} = require("../../middleware/auth");

connection();


// POST /login
async function login(req, res) {
  try {
    const {username, password} = req.body;

     // Check if user already exists
     const user = await User.findOne({username});
     if (!user) {
       return res.status(401).json({ message: "User not found" });
     }

     const isMatch = await bcrypt.compare(password, user.password);
     if (!isMatch) {
       return res.status(401).json({ success:false, message: "Invalid credentials"});
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


      res.status(200).json({success: true, user: payload.user, token});

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

// POST /register
async function register(req, res) {
  try {
    const {username, password,email,number,role} = req.body;
   // const {avatar} = req.files;

   const user = await User.findOne({email});
    if(user){
        return res.status(400).json({success: false, message: "User already exists"});
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

  } 
  catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

// GET /users
async function getUsers(req, res) {
    try {
        const users = await User.find().limit(2);
        res.status(200).json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
}

// GET /logout
async function logout(req, res) {
  const token = req.cookies["token"];
  try{
    if(!token){
      return res.status(401).json({ message: "You need to be logged in to continue." });
    }
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Logged out successfully" });
  }catch(err){
    console.log(err.message);
    res.status(401).json({message:"Server error"})
  }
 
}

module.exports = { login, register,getUsers, logout };

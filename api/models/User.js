const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique: true,
    },
    number:{
        type: Number,
        required:true
    },
    role:{
        type: String
    },
    datecreated:{
        type: Date,
        default: Date.now
    },
    avatar:{
        public_id: String,
        url: String,
    }
})
const User = mongoose.model('User', userSchema);
module.exports = User

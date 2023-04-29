const mongoose = require("mongoose")
require("dotenv").config();

const connection = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log(`MongoDB Connected ${con.connection.host}`)
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports= connection;
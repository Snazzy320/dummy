
const mongoose = require("mongoose")
const dotenv =require("dotenv").config()



// function to connect to DB
const connectDB = async()=>{

    try {

      await  mongoose.connect(process.env.MONGODB_URL)

        console.log("mongodb is connected")
        
    } catch (error) {
        console.log("error connecting to db");
        
    }
}

module.exports = connectDB
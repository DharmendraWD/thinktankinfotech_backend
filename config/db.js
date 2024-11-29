const mongoose = require("mongoose");
require('dotenv').config();


function connectDB(mongoURI){
    mongoose.connect(mongoURI).then(()=>{
        console.log("database connected succesfully...")
    })
}

module.exports = connectDB
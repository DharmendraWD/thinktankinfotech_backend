const express = require('express')
const app = express()
require('dotenv').config(); 

const connectDB = require('./config/db')
connectDB(process.env.MONGO_URI);


// HOMEPAGE 1ST HERO 
// homepage 1st hero sec text api 





app.listen(process.env.PORT, () => console.log(` app listening on port ${process.env.PORT}!`))
const express = require("express")
const mongoose = require('mongoose')
const Product = require('./models/productModel')
require('dotenv').config();
const app = express()
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

app.use(express.json());
//app.use(express.urlencoded({extended:false}));



mongoose.connect(MONGO_URL)
.then(() => {
    console.log("connect top MongoDB")
    app.listen(PORT, () => {
        console.log(`Node API app is rnning on port ${PORT}`);
    })
    
}) 
.catch((error) => {
    console.log(error)
})


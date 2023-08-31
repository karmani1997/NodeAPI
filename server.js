const express = require("express")
const asyncHandler = require('express-async-handler')
//const cors = require('cors')
const mongoose = require('mongoose')
const productRoute = require("./routes/productRoutes");


const {errorMiddleware} = require('./middleware/errorMiddleware')

require('dotenv').config();
const app = express()
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

// var corsOptions = {
//     origin: 'http://127.0.0.1:3000',
//     optionsSuccessStatus: 200
// }


app.use(express.json());
//app.use(cors(corsOptions))

//app.use(express.urlencoded({extended:false}));


app.use('/api/products', productRoute)


// app.get('/', asyncHandler(async(req, res, next) => {
//     console.log("error in hello world!")
//     throw new Error('fake error')

// }))

app.use(errorMiddleware);

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

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(() => console.log('DB_conectada SuccessFull!!!')).catch((err) =>{
    console.log(err)
})

app.listen(process.env.PORT ||5000, () =>{
    console.log('app liste, active')
})
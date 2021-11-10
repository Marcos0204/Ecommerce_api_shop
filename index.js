const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://marcos:marcospasswor@cluster0.kjm0o.mongodb.net/MERNTASKS?retryWrites=true&w=majority').then(() => console.log('DB_conectada')).catch((err) =>{
    console.log(err)
})

app.listen(5000, () =>{
    console.log('app liste, active')
})
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
const userRoute = require('./routes/user')
const authRouter = require('./routes/auth')
const productRouter = require('./routes/product')

dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(() => console.log('DB_conectada SuccessFull!!!')).catch((err) =>{
    console.log(err)
})
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/users', userRoute)
app.use('/api/products', productRouter)

app.listen(process.env.PORT || 5000, () =>{
    console.log('app liste, active')
})
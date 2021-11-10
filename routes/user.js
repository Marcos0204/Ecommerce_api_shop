const router = require('express').Router()

router.get('/usertest', (req, res)=>{
    console.log('user get')
    res.send('user Test is successfull')
})

router.post('/userposttest', (req, res)=> {
    const username = req.body.username
    res.send({name: username, msg:'succesfull'})
    console.log(username)
})

module.exports = router
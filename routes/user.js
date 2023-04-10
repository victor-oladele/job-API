
const express = require('express')
const router = express.Router()
const {register , login} = require('../controller/auth')
const ratelimiter = require('express-rate-limit')


const apilimiter = ratelimiter({
      windowMs:15*60*1000,
      max:2,
      message:{
            msg:'Too much request fron this IP , Try again in 15minutes'
      }
})

router.route('/register')
      .post(apilimiter , register)


router.route('/login')
      .post(apilimiter , login)



module.exports = router
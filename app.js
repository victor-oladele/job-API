require('dotenv').config()
require('express-async-errors')



const express = require('express')
const app = express()

// connecting to database
const connectdb = require('./db/connect')

// errorhandling
const errorhandler = require('./middleware/errorhandler')
const notfound = require('./middleware/not-found')

const port = process.env.PORT || 3500

// user route
const userroutes = require('./routes/user')

// job route
const jobroute = require('./routes/job')

// auth middleware
const authmiddleware = require('./middleware/authmiddleware')

// extra security packages

// helmet helps you secure your nodejs application by setting several http headers
const helmet = require('helmet')
// it is used to secure a certain web server from access from other website or domain
const cors = require('cors')
// middleware to sanitize user input
const xss = require('xss-clean')
// it is used to limit repeated request
const ratelimiter = require('express-rate-limit')


app.set('trust proxy' , 1)
app.use(ratelimiter({
    windowMs:15*60*1000, 
    max:100,
}))


app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())




app.use('/api/v1/auth' , userroutes)
app.use('/api/v1/jobs' , authmiddleware , jobroute)

app.use(errorhandler)
app.use(notfound)
const start = async() =>{
    try {
        await connectdb(process.env.MONGO_URI)
        app.listen(port , ()=>{
            console.log(`server running on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}


start()
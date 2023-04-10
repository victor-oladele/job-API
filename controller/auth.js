


const User = require('../model/users')
const {StatusCodes} = require('http-status-codes')
const {badrequesterror , authenticatederror} = require('../errors')


const register = async(req , res)=>{
    const user = await User.create(req.body)
    const token = user.createjwt()
    res.status(StatusCodes.CREATED).json({ user:{name:user.name} , token })
}

const login = async(req , res) =>{
    const {email , password} = req.body
    if(!email || !password){
        throw new badrequesterror('pls provide your email or password')
    }
    const user = await User.findOne({email})
    if(!user){
        throw new authenticatederror('Invalid credentials')
    }
    const ispasswordmatch = await user.comparepassword(password)
    if(!ispasswordmatch){
        throw new authenticatederror('Invalid credentials')
        
    }
    const token = user.createjwt()
    res.status(StatusCodes.OK).json({user:{name:user.name} , token})
}


module.exports = {
    register,
    login
}








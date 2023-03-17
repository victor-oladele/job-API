
const mongoose = require('mongoose')

const jobschema = new mongoose.Schema({
    company:{
        type:String,
        required:[true , 'provide company name'],
        minlength:3
    },
    position:{
        type:String,
        required:[true , 'provide position name'],
        minlength:3 
    },
    status:{
        type:String,
        enum:['pending' , 'interview' , 'declined'],
        default:'pending'
    },
    createdby:{
        type:mongoose.Types.ObjectId,
        ref:'users',
        required:[true , 'pls provide user']
    }
} , {timestamps:true})



module.exports = mongoose.model('jobs2' , jobschema)



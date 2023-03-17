
// const { StatusCodes } = require("http-status-codes")



// const errorhandler = (err , req , res , next) =>{

//   let customerror = {
//     statusCode:err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
//     msg:err.message || 'something went wrong try again later'
//   }

//   // error due to m ongoose validation

//    if(err.name === 'ValidationError'){
//     customerror.msg = Object.values(err.errors).map((item)=>item.message).join(',')
//     customerror.statusCode = 400
//    }

  
//   //  error due to duplicate email
//     if(err.code && err.code === 11000){
//         customerror.msg=`Duplicate value entered for ${Object.keys(err.keyValue)} field , please choose another value`
//         customerror.statusCode = 400
//     }

//     // handling cast error: wrong id
//     if(err.name === 'CastError'){
//       customerror.msg = `No item found with id: ${err.value}`
//       customerror.statusCode = 400
//     }

//     // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err}) 

//     return res.status(customerror.statusCode).json({msg:customerror.msg})

        
// }



// module.exports = errorhandler

const {StatusCodes} = require('http-status-codes')

const errorhandler = (err , req , res , next) =>{
    customerror = {
        statusCodes: err.statusCodes || StatusCodes.INTERNAL_SERVER_ERROR,
        msg:err.message || 'something went wrong , pls try again later'
    }

    if(err.name === 'ValidationError'){
        customerror.msg = Object.values(err.errors).map((item) => item.message).join(',')
        customerror.statusCodes = 400
    }

    if(err.code && err.code === 11000){
        customerror.msg = `Duplicate values entered for the email field , try another value`
        customerror.statusCodes = 400
    }

    if(err.name === 'CastError'){
        customerror.msg = `No item found for this id:${err.value}`
        customerror.statusCodes = 404
    }

    res.status(customerror.statusCodes).json({msg:customerror.msg})

}



module.exports = errorhandler



















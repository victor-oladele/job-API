
const customapierror = require('./customapierror')
const {StatusCodes} = require('http-status-codes')

class authenticatederror extends customapierror{
    constructor(message){
        super(message)
        this.statusCodes = StatusCodes.UNAUTHORIZED
    }
}

module.exports = authenticatederror

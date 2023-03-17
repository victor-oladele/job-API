
const customapierror = require('./customapierror')
const {StatusCodes} = require('http-status-codes')

class notfounderror extends customapierror{
    constructor(message){
        super(message)
        this.statusCodes = StatusCodes.NOT_FOUND
    }
}

module.exports = notfounderror

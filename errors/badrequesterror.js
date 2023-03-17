
const customapierror = require('./customapierror')
const {StatusCodes} = require('http-status-codes')

class badrequesterror extends customapierror{
    constructor(message){
        super(message)
        this.statusCodes = StatusCodes.BAD_REQUEST
    }
}

module.exports = badrequesterror

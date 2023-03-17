

const Job = require('../model/jobs')
const {StatusCodes} = require('http-status-codes')
const {notfounderror, badrequesterror} = require('../errors')


const getalljobs = async(req , res)=>{
    const job = await Job.find({createdby:req.user.userid})
    res.status(StatusCodes.OK).json({ job })
}

const getjob = async(req , res)=>{
    const {user:{userid} , params:{id:jobid}} = req
    const job = await Job.findOne({_id:jobid , createdby:userid})
    if(job){
        throw new notfounderror(`There is no job with this id ${jobid}`)
    }
    res.status(StatusCodes.OK).json({ job })
}

const createjob = async(req , res)=>{
    req.body.createdby = req.user.userid
    const job = await Job.create({...req.body})
    res.status(StatusCodes.OK).json({ job })
}


const deletejob = async(req , res)=>{
    const {user:{userid} , params:{id:jobid}} = req
    const job = await Job.findByIdAndRemove({_id:jobid , createdby:userid})
    if(job){
        throw new notfounderror(`There is no job with this id ${jobid}`)
    }
    res.status(StatusCodes.OK).json({ job })
}

const updatejob = async(req , res)=>{
    const { body:{company , position} , user:{userid} , params:{id:jobid}} = req
    if(!company || !position){
        throw new badrequesterror('company and position fields cannot be empty')
    }
    const job = await Job.findByIdAndUpdate({_id:jobid , createdby:userid} , req.body , {
        new:true,
        runValidators:true
    })
    if(!job){
        throw new notfounderror(`There is no job with this id ${jobid}`)
    }
    res.status(StatusCodes.OK).json({ job })
}


module.exports = {
    getalljobs,
    getjob,
    createjob,
    deletejob,
    updatejob
}















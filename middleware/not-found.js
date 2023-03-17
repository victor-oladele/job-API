

const notfound = (req , res)=>{
    res.status(404).send('This route not found')
}

module.exports = notfound
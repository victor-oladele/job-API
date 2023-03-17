

const express = require('express')
const router = express.Router()
const {getalljobs , getjob , deletejob , updatejob , createjob} = require('../controller/jobs')




router.route('/')
      .post(createjob)
      .get(getalljobs)


router.route('/:id')
      .get(getjob)
      .delete(deletejob)
      .patch(updatejob)



      module.exports = router
//server/model/controller/route/server
const express = require('express')
const router = express.Router()

const DrugController = require('../controllers/drugController')
const upload    = require('../middleware/upload')
const authenticate = require('../middleware/authenticate')

router.get('/', authenticate, DrugController.index)
router.post('/show', DrugController.show) 
router.post('/store', upload.array('avatar[]'), DrugController.store)
router.post('/update', DrugController.update)
router.post('/delete', DrugController.destroy)

module.exports = router
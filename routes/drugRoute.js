//server/model/controller/route/server
const express = require('express')
const router = express.Router()

const DrugController = require('../controllers/drugController')

router.get('/', DrugController.index)
router.post('/show', DrugController.show)
router.post('/store', DrugController.store)
router.post('/update', DrugController.update)
router.post('/delete', DrugController.destroy)

module.exports = router
const express = require ('express')
const { viewAll, viewOne, newCli, updateCli, delCli } = require('../controller/CliController')
const router = express.Router()
const {dataCheck, idValidator} = require('../middleware/validation')

router.get('/', viewAll)
router.get('/view/:id',idValidator, viewOne)
router.post('/',dataCheck, newCli)
router.put('/update/:id',idValidator,dataCheck,updateCli)
router.delete('/:id',idValidator, delCli)

module.exports = router


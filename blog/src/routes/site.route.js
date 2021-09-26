var express = require('express')
var router = express.Router()

const siteControllers = require('../app/controllers/site.controller')

router.use('/search', siteControllers.search)
router.use('/', siteControllers.index)

module.exports = router
var express = require('express')
var router = express.Router()

const newsControllers = require('../app/controllers/news.controller')

router.use('/:slug', newsControllers.show)
router.use('/', newsControllers.index)

module.exports = router
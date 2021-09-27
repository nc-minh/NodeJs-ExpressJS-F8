var express = require('express')
var router = express.Router()

const newsControllers = require('../app/controllers/news.controller')

router.get('/:slug', newsControllers.show)
router.get('/', newsControllers.index)

module.exports = router
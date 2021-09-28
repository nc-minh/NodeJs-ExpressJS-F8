var express = require('express')
var router = express.Router()

const siteControllers = require('../app/controllers/post.controller')

router.get('/search', siteControllers.search)
router.get('/', siteControllers.index)

module.exports = router
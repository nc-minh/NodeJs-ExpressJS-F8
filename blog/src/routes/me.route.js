var express = require('express')
var router = express.Router()

const meControllers = require('../app/controllers/me.controller')

router.get('/stored/posts', meControllers.storedPosts)
router.get('/trash/posts', meControllers.trashPosts)

module.exports = router
var express = require('express')
var router = express.Router()

const PostsControllers = require('../app/controllers/post.controller')

router.get('/create', PostsControllers.create)
router.post('/store', PostsControllers.store)
router.get('/:slug', PostsControllers.show)
router.get('/', PostsControllers.index)

module.exports = router
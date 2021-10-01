var express = require('express')
var router = express.Router()

const PostsControllers = require('../app/controllers/post.controller')

router.get('/create', PostsControllers.create)
router.post('/store', PostsControllers.store)
router.get('/:id/edit', PostsControllers.edit)
router.put('/:id', PostsControllers.update)
router.get('/:slug', PostsControllers.show)
router.get('/', PostsControllers.index)

module.exports = router
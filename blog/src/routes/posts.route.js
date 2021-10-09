var express = require('express')
var router = express.Router()

const PostsControllers = require('../app/controllers/post.controller')

router.get('/create', PostsControllers.create)
router.post('/store', PostsControllers.store)
router.post('/form-actions', PostsControllers.formAction)
router.get('/:id/edit', PostsControllers.edit)
router.put('/:id', PostsControllers.update)
router.patch('/:id/restore', PostsControllers.restore)
router.delete('/:id', PostsControllers.delete)
router.delete('/:id/force', PostsControllers.forceDelete)
router.get('/:slug', PostsControllers.show)
router.get('/', PostsControllers.index)

module.exports = router
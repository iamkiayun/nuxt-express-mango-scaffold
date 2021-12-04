const express = require ('express')
const blogController = require('../controllers/blogController')
const router = express.Router()



router.get('/add-blog', blogController.blog_blog)


module.exports = router

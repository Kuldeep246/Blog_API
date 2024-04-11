const express = require('express');
const verifyToken = require('../middlewares/verifyToken')
const {updateBlog,readBlog,deleteBlog,createBlog}=require('../controller/BlogController')

const router = express.Router();


router.post('/', verifyToken, createBlog);

router.get('/:id', verifyToken,readBlog );

router.put('/:id', verifyToken,updateBlog);

router.delete('/:id', verifyToken,deleteBlog );

module.exports = router;





  
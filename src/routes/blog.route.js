const express = require('express');
const router=express.Router();
const blogController=require('../controllers/blog.controller');
router.get('/', blogController.blogs);
router.get('/:id', blogController.blog);
router.post('/create', blogController.create);
router.put('/update/:id', blogController.update);
router.delete('/delete/:id', blogController.delete);
module.exports=router;
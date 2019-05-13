const express = require('express');
const router=express.Router();
const commentController=require('../controllers/comment.controller');
router.get('/', commentController.comments);
router.get('/:id', commentController.comment);
router.post('/create', commentController.create);
router.put('/update/:id', commentController.update);
router.delete('/delete/:id', commentController.delete);
module.exports=router;
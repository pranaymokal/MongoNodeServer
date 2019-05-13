const express = require('express');
const router=express.Router();
const imageController=require('../controllers/image.controller');
router.get('/', imageController.images);
router.get('/:id', imageController.image);
router.post('/create', imageController.create);
router.put('/update/:id', imageController.update);
router.delete('/delete/:id', imageController.delete);
module.exports=router;
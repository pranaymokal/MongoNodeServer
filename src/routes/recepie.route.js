const express = require('express');
const router=express.Router();
const recepieController=require('../controllers/recepie.controller');
router.get('/', recepieController.recepies);
router.get('/:id', recepieController.recepie);
router.post('/create', recepieController.create);
router.put('/update/:id', recepieController.update);
router.delete('/delete/:id', recepieController.delete);
module.exports=router;
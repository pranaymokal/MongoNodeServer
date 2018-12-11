const express = require('express');
const router=express.Router();
const userController=require('../controllers/user.controller');
router.get('/', userController.users);
router.get('/:id', userController.user);
router.put('/login', userController.login);
router.post('/create', userController.create);
router.put('/update/:id', userController.update);
router.delete('/delete/:id', userController.delete);
module.exports=router;



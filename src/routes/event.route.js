const express = require('express');
const router=express.Router();
const eventController=require('../controllers/event.controller');
router.get('/', eventController.events);
router.get('/:id', eventController.event);
router.post('/create', eventController.create);
router.put('/update/:id', eventController.update);
router.delete('/delete/:id', eventController.delete);
module.exports=router;
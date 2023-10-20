const express=require('express');
const router=express.Router();
const userContoller=require('../Controller/userController');

router.post('/user',userContoller.createUser);
router.get('/user',userContoller.getAllUsers);
router.put('/user/:id',userContoller.updateUser);
router.delete('/user/:id',userContoller.deleteUser);



module.exports=router;
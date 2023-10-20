const express=require('express');
const router=express.Router();
const purchaseContoller=require('../Controller/purchaseController');

router.post('/purchase',purchaseContoller.createPurchase);
router.get('/purchase',purchaseContoller.getAllPurchases);
router.put('/purchase/:id',purchaseContoller.updatePurchase);
router.delete('/purchase/:id',purchaseContoller.deletePurchase);



module.exports=router;
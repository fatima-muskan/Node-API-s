const express=require('express');
const router=express.Router();
const productContoller=require('../Controller/productController');

router.post('/product',productContoller.createProduct);
router.get('/product',productContoller.getAllProducts);
router.put('/product/:id',productContoller.updateProduct);
router.delete('/product/:id',productContoller.deleteProduct);



module.exports=router;
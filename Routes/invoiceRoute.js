const express=require('express');
const router=express.Router();
const invoiceContoller=require('../Controller/invoiceController');

router.post('/invoice',invoiceContoller.createInvoice);
router.get('/invoice',invoiceContoller.getAllInvoices);
router.put('/invoice/:id',invoiceContoller.updateInvoice);
router.delete('/invoice/:id',invoiceContoller.deleteInvoice);



module.exports=router;
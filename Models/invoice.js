const mongoose=require('mongoose')

const invoiceSchema=mongoose.Schema({
    customerName:String,
    paymentMethod:String,
    discount:Number,
    totalAmount:Number,
    invoiceDate:Date
}, {timestamps:true}
 );

 module.exports=mongoose.model('Invoice',invoiceSchema);
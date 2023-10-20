const mongoose=require('mongoose')

const purchaseSchema=mongoose.Schema({
    productName:String,
    quantity:Number,
    unitPrice:Number,
    orderTotal:Number,
    paymentStatus:Boolean,
    date:Date
}, {timestamps:true}
 );

 module.exports=mongoose.model('Purchase History',purchaseSchema);
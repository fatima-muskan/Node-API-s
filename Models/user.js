const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:String,
    cnic:String,
    fatherName:String,
    dob:Date,
    contact:String,
}, {timestamps:true}
 );

 module.exports=mongoose.model('User',userSchema);
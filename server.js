const express = require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
require('./Utils/db.js');
const productRouter=require('./Routes/productRoute.js');
const userRouter=require('./Routes/userRoute.js');
const invoiceRouter=require('./Routes/invoiceRoute.js');
const purchaseRouter=require('./Routes/purchaseRoute.js');
const PORT=3005;

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api',productRouter);
app.use('/api',userRouter);
app.use('/api',invoiceRouter);
app.use('/api',purchaseRouter);

//app.get('/',(req,res)=>{
  //  res.send("Welcome to my first application");
//})

//app.get('/welcome',(req,res)=>{
  //  res.send("Welcome Fatiam Muskan");
//})

app.listen(PORT,()=>{
    console.log("Server is reading on the port",PORT);
})
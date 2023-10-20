const Product=require('../Models/product');
//create 
async function createProduct(req,res){
    try{
        const newProduct=await Product.create(req.body);
        //200 for success 
        res.status(201).json(newProduct);

    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
//Edit or Update 
async function updateProduct(req,res){
    try{
        //const[id]=req.body.id

        const {id}=req.params;
        const updatedProduct=await Product.findByIdAndUpdate(id,req.body,{new:true});
        res.status(201).json(updatedProduct);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
//Retrieve
async function getAllProducts(req,res){
    try{
       const products=await Product.find();
        res.status(201).json(products);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
//Delete
async function deleteProduct(req,res)
{
    try{
        const{id}=req.params;
        await Product.findByIdAndRemove(id);
        res.sendStatus(204);

    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
module.exports={createProduct,updateProduct,getAllProducts,deleteProduct};
const Purchase=require('../Models/purchase');
//create 
async function createPurchase(req,res){
    try{
        const newPurchase=await Purchase.create(req.body);
        //200 for success 
        res.status(201).json(newPurchase);

    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
//Edit or Update 
async function updatePurchase(req,res){
    try{
        //const[id]=req.body.id

        const {id}=req.params;
        const updatedPurchase=await Purchase.findByIdAndUpdate(id,req.body,{new:true});
        res.status(201).json(updatedPurchase);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
//Retrieve
async function getAllPurchases(req,res){
    try{
       const Purchases=await Purchase.find();
        res.status(201).json(Purchases);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
//Delete
async function deletePurchase(req,res)
{
    try{
        const{id}=req.params;
        await Purchase.findByIdAndRemove(id);
        res.sendStatus(204);

    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
module.exports={createPurchase,updatePurchase,getAllPurchases,deletePurchase};
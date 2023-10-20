const Invoice=require('../Models/invoice');
//create 
async function createInvoice(req,res){
    try{
        const newInvoice=await Invoice.create(req.body);
        //200 for success 
        res.status(201).json(newInvoice);

    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
//Edit or Update 
async function updateInvoice(req,res){
    try{
        //const[id]=req.body.id

        const {id}=req.params;
        const updatedInvoice=await Invoice.findByIdAndUpdate(id,req.body,{new:true});
        res.status(201).json(updatedInvoice);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
//Retrieve
async function getAllInvoices(req,res){
    try{
       const Invoices=await Invoice.find();
        res.status(201).json(Invoices);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
//Delete
async function deleteInvoice(req,res)
{
    try{
        const{id}=req.params;
        await Invoice.findByIdAndRemove(id);
        res.sendStatus(204);

    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
module.exports={createInvoice,updateInvoice,getAllInvoices,deleteInvoice};
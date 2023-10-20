const user=require('../Models/user');
//create 
async function createUser(req,res){
    try{
        const newUser=await user.create(req.body);
        //200 for success 
        res.status(201).json(newUser);

    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
//Edit or Update 
async function updateUser(req,res){
    try{
        const {id}=req.params;
        const updatedUser=await user.findByIdAndUpdate(id,req.body,{new:true});
        res.status(201).json(updatedUser);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
//Retrieve
async function getAllUsers(req,res){
    try{
       const students=await user.find();
        res.status(201).json(students);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
//Delete
async function deleteUser(req,res)
{
    try{
        const{id}=req.params;
        await user.findByIdAndRemove(id);
        res.sendStatus(204);

    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
module.exports={createUser,updateUser,getAllUsers,deleteUser};
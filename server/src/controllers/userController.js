const User = require('../models/User');
exports.getUsers= async(req, res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
    } catch(err){
        res.status(500).json({message:err.message});
    }
};

//@ route POST /api/users/:id
exports.getUserById=async(req,res)=>{
    try{
        const user=  await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        res.status(201).json(populatedNotice);
    } catch(err){
        res.status(400).json({message:err.message});
    }
};
//@ route POST /api/users
// create a new User
exports.createUser=async(req,res)=>{
    try{
        const {name,email,role,rollNumber,password}=req.body;
        const newUser= new User({name,email,role,roleNumber,password});
        await newUser.save();
        res.status(201).json(newUser);
    } catch(err){
        res.status(400).json({message:err.message});
    }
};
const mongoose= require('mongoose');
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true,
    },
    email:{
        type:String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
    },
    role:{
        type: String,
        enum:['student','teacher','admin'],
        required: true,
    },
    rollNumber:{
        type:String,
        unique: true,
        sparse: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
    },
});
const User= mongoose.model('User',userSchema);
module.exports=User;
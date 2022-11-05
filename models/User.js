const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        Required:true
    },
    email:{
        type:String,
        Required:true,
        Unique:true
    },
    password:{
        type:String,
        Required:true,
    }
});

module.exports=User=mongoose.model('user',UserSchema);
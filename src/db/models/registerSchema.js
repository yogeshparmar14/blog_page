const mongoose =require("mongoose");

//defining schema
const date = new Date().getTime();

const registerSchema = new mongoose.Schema({
    email:{type:String,required:true,trim:true},
    password:{type:String,required:true,trim:true},
    termCondition:{type:Boolean,required:false},
    createdAt:{type:String,default:date},
    updatedAt:{type:Number},
    isActive:{type:Boolean},
    userType:{type:String,default:"USER",trim:true}
})


//model

const userModel = mongoose.model("user",registerSchema)
module.exports = userModel;
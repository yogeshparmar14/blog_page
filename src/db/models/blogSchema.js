const mongoose = require("mongoose");
const date = new Date().getTime();
const blogSchema = new mongoose.Schema({
    title:{type:String,required:true},
    imageUrl:{type:String,required:true},
    discription:{type:String,required:true},
    createdAt:{type:String,default:date},
})

const userModel = mongoose.model("blog",blogSchema)

module.exports = userModel;
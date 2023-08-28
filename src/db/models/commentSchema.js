const mongoose = require("mongoose");
const date = new Date().getTime();
const commentSchema = new mongoose.Schema({
    // blogId:{type:String,required:true},
    blog_id: {
        type: mongoose.Types.ObjectId,
        refs: 'blogs',
        required: true
    },
    commentDescription:{type:String,required:true},
    createdAt:{type:String,default:date},
})

const commentModel = mongoose.model("comment",commentSchema)

module.exports = commentModel;
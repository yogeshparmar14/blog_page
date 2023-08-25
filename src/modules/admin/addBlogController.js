const userModel=require("../../db/models/blogSchema.js")
const addBlog = async (req,res)=>{
    const {title,imageUrl,description} = req.body
    console.log("req.body",req.body)
    if(!title || !imageUrl ||!description)
    return res.status(400).send({"message":"All fields are required","status":400}) 
    try {
        
        const doc = new userModel({
            title:title,
            imageUrl:imageUrl,
            discription:description,
        })
        await doc.save()
        res.status(200).send({"message":`${title} is added successfully!`, "status":200,
        "data":{
            "title":`${title}`,
            "discription":`${description}`,
            "imageUrl":`${imageUrl}`}
        })
    } catch (error) {
        console.log(error)
                     res.status(403).send({"message":"Unable to add blog","status":403})
    }
}

const getAllBlog = async (req,res)=>{
    try{
        const data = await userModel.find();
        res.json(data)
    }
    catch(error){
        res.status(403).json({"message":"Unable to fatch blog"})
    }
}

const editBlog = async (req,res)=>{
    try{
            const id = req.params.id;
            const newData = req.body; // New data to update the document
          
            userModel.updateOne({ _id: id }, { $set: newData }, (err, result) => {
              if (err) {
                console.error('Error updating blog:', err);
                res.status(500).send('Error updating blog');
                return;
              }
          
              res.send({"message":`blog is updated successfully!`, "status":200,
              
              })
            });
          
          
    }
    catch(error){
        res.status(403).json({"message":"Unable to update blog"})
    }
}


const updateLike = async (req,res)=>{
    try{
            const id = req.params.id;
            const newData = req.body; // New data to update the document
          
            userModel.updateOne({ _id: id }, { $set: newData }, (err, result) => {
              if (err) {
                console.error('Error updating blog:', err);
                res.status(500).send('Error updating blog');
                return;
              }
          
              res.send({"message":`blog is updated successfully!`, "status":200,
              
              })
            });
          
          
    }
    catch(error){
        res.status(403).json({"message":"Unable to update blog"})
    }
}
const deleteBlog = async (req,res)=>{

    try{
        
  const id = req.params.id;

  userModel.deleteOne({ _id: id }, (err, result) => {
    if (err) {
      console.error('Error deleting blog:', err);
      res.status(500).send('Error deleting blog');
      return;
    }

    res.send({"message":`blog is deleted successfully!`, "status":200,
              
              })
  });
    }
    catch(error){
        res.status(403).json({"message":"Unable to delete blog"})
    }
}


module.exports = {addBlog,getAllBlog,editBlog,deleteBlog,updateLike}
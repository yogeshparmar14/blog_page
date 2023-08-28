const express = require("express");
const  {addBlog,getAllBlog,editBlog,deleteBlog,updateLike,addComment}= require('../modules/admin/addBlogController.js');
const checkUserAuth=require('../modules/authentication/authaTokenCheck.js')
 
const router = express.Router();
//Public routes
 
router.post('/add-blog',checkUserAuth,addBlog);
router.get("/get-all-blogs",getAllBlog);
router.put('/update/:id',editBlog);
router.post('/add-comment',addComment);
router.put('/update-like/:id',updateLike);
router.delete("/delete/:id",deleteBlog);

module.exports = router
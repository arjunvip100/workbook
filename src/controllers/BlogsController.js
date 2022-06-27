const authorModel = require("../models/authorModel")
const blogModel = require("../models/blogModel");
const createBlog = async function (req, res) {
    try {
        let data = req.body;
        if (data.authorId == undefined) return res.status(400).send({ status: false, msg: 'enter author id' })
        let check = await authorModel.findById(data.authorId);
        if (!check)
            return res.status(400).send({ status: false, msg: 'enter valid author id' });
        const createdBlog = await blogModel.create(data);
        if (!createdBlog)
            return res.status(400).send({ status: false, msg: 'data required' });
        res.status(201).send({ status: true, msg: createdBlog });
    } catch (err) {
        res.status(500).send({
            status: false,
            msg: err.message,
        });
    }
};

const findBlogs = async function (req, res) {

    try {
        const allBlogs = await blogModel.find({ $and: [{ isDeleted: false}, { isPublished: true}] });
        if (allBlogs == false) return res.status(404).send({ status: false, msg: "No such Blogs are present" });
        res.status(200).send({ status: true, msg: "Found Blogs", data: allBlogs })
        
    } catch (err) {
        res.status(500).send({
            status: false,
            msg: err.message,
        })
    }

}


const updateBlogs=async function(req,res){
    try{
      const titl=req.body.title
      const bod=req.body.body
      const tag=req.body.tags
      const subcat=req.body.subcategory
      const date=Date.now()
    
        const allBlogs = await blogModel.findOne({ $and: [{_id:req.params.blogid} ,{isDeleted: false }]})
        if(!allBlogs) return res.status(404).send({status:false,msg:"No such id is present"})
        const updatedBlog=await blogModel.findByIdAndUpdate({ _id:req.params.blogid},{$set: {title:titl, body:bod,tags:tag,subcategory:subcat ,isPublished:true,publishedAt:date}},{new:true})
      
        res.status(200).send({status:true,msg:"updated Blog", data:updatedBlog})
    
    }catch (err) {
        res.status(500).send({
            status: false,
            msg: err.message,
        })
    }
    }
    const deleteBlog= async function(req,res){

        const date=Date.now()
    
        const allBlogs = await blogModel.findOne({ $and: [{_id:req.params.blogid} ,{isDeleted: false }]})
        if(!allBlogs) return res.status(404).send({status:false,msg:"No such id is present"})
        const deletedBlog=await blogModel.findByIdAndUpdate({ _id:req.params.blogid},{$set: {isDeleted:true,deletedAt:date}},{new:true})
        res.status(200).send({status:true,msg:"Deleted Blog", data: deletedBlog })
    }
    //
    const deleteBlogsByparams= async function(req,res){
    
    try{
         const cat=req.query.category
         const authid=req.query.authorId
         const tag=req.query.tags
         const subcat=req.query.subcategory
         const publish=req.query.isPublished
         const date=Date.now()
    
         const deletedBlog=await blogModel.findOneAndUpdate({ $or: [{ authorId:authid }, { category: cat }, { tags: tag }, { subcategory: subcat },{isPublished:publish}] },{$set: {isDeleted:true,deletedAt:date}},{new:true})
         if(!deletedBlog) return res.status(404).send({status:false,msg:"Please input Data in Params"})
         res.status(200).send({status:true,msg:"Deleted Blog", data: deletedBlog })
    }catch (err) {
            res.status(500).send({
                status: false,
                msg: err.message,
            })
        }
    
    }
    
    
 module.exports.deleteBlog=deleteBlog 
 module.exports.deleteBlogsByparams=deleteBlogsByparams
module.exports.updateBlogs=updateBlogs
module.exports.findBlogs = findBlogs
module.exports.createBlog= createBlog
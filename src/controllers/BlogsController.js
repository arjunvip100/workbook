const authorModel = require("../models/authorModel")
const blogModel = require("../models/blogModel");

const createBlog = async function (req, res) {
    try {
        const { authorId, title, body, category, isPublished, tags, subcategory, isDeleted} = req.body
        //validation starts
        if (!authorId) {
            res.status(400).send({ status: false, msg: "authorId field is required" })
        } else if (!title) {
            res.status(400).send({ status: false, msg: "title field is required" })
        } else if (!body) {
            res.status(400).send({ status: false, msg: "body is required" })
        } else if (!category) {
                res.status(400).send({ status: false, msg: "category is required" })
            } else {
                const author = await authorModel.findById(authorId);
                if (!author) {
                    res.status(400).send({ status: false, msg: "Author Id is not valid" })
                }
                //validations ends

                let blogss = {
                    title,
                    body,
                    authorId,
                    category,
                    tags,
                    subcategory,
                    isPublished: isPublished ? isPublished : false,
                    publishedAt: isPublished ? new Date() : null,
                    isDeleted: isDeleted ? isDeleted : false,
                    deleteAt: isDeleted ? new Date() : null
                }
                let blogCreated = await blogModel.create(blogss)
                res.status(201).send({ status: true, data: blogCreated })

            }

    } catch (err) {
        console.log(err.message)
        res.status(500).send({ error: err.message })
    }
};

const getblogs = async function (req, res) {

    try {
        let data=req.query
        let list = await blogModel.find({ isDeleted: false, isPublished: true, ...data })
        console.log(list)
        if (list==false) { res.status(404).send({ status: false, msg: "blog not found" }) }
        
           return res.status(200).send({ status: true, data: list })
        
    }
    catch (err) {

        return res.status(500).send({ status: false, msg: err.message })
    }
};


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
    const deleteBlogsByparams = async function (req, res) {

        try {
            const cat = req.query.category
            const authid = req.query.authorId
            const tag = req.query.tags
            const subcat = req.query.subcategory
            const publish = req.query.isPublished
            const date = Date.now()
            const deletedBlog = await blogModel.findOneAndUpdate({ $or: [{ authorId: authid }, { category: cat }, { tags: tag }, { subcategory: subcat }, { isPublished: publish }] }, { $set: { isDeleted: true, deletedAt: date } }, { new: true })
            // console.log(deletedBlog)
            if (!deletedBlog) return res.status(404).send({ status: false, msg: "Please input Data in Params" })
            res.status(200).send({ status: true, msg: "Deleted Blog", data: deletedBlog })
    
        } catch (err) {
            res.status(500).send({
                status: false,
                msg: err.message,
            })
        }
    
    }
    
    
 module.exports.deleteBlog=deleteBlog 
 module.exports.deleteBlogsByparams=deleteBlogsByparams
module.exports.updateBlogs=updateBlogs
module.exports.getblogs = getblogs
module.exports.createBlog= createBlog
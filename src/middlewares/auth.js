const jwt = require('jsonwebtoken')
const Author = require("../models/authorModel")
const Blogs = require("../models/blogModel")
const mongoose = require('mongoose')


const authenticate = async function (req, res, next) {

  let token = req.headers['x-api-key']
  if (!token) token = req.headers['x-Api-key']
  if (!token) res.status(400).send({ status: false, msg: "PLease input token " })
  let validtoken = jwt.verify(token, "functionup-thorium")
  if (!validtoken) return res.status(402).send({ status: false, msg: "Please enter valid Token " })

  next()

}


const authorise = async function (req, res, next) {

  let token = req.headers['x-api-key']
  if (!token) {
    return res.status(400).send({ status: false, msg: "Please input token headers" })
  }
  let decodedtoken = jwt.verify(token, "functionup-thorium")

  if (!decodedtoken) res.status(402).send({ status: false, msg: "Please enter valid token " })
  let userBlog = req.params.blogid
  let userAuth = decodedtoken.userId
  let findBlogs = await Blogs.findOne({_id:userBlog });
  console.log(findBlogs)
  if (!findBlogs) return res.status(402).send({ status: false, msg: "Please enter valid blogId" })
  if (userAuth != findBlogs.authorId) res.status(404).send({status:false,msg: "Please login with your mail id "})
  next()
}


module.exports.authenticate= authenticate
module.exports.authorise= authorise
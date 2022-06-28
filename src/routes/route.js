const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/authorController");
const BlogsController= require("../controllers/BlogsController");
const Middleware = require("../middlewares/auth");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//Author Apis
router.post("/authors", AuthorController.createAuthor)
router.post("/login",AuthorController.login)

//Blog Apis
router.post("/blogs",BlogsController.createBlog)
router.get("/getblogs",BlogsController.getblogs)
router.put("/updateblogs/:blogid",Middleware.authToken,BlogsController.updateBlogs)
router.delete("/delblogs/:blogid",Middleware.authToken,BlogsController.deleteBlog)
router.delete("/delblogbyparam",BlogsController.deleteBlogsByparams )







module.exports = router;

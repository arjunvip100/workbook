const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/authorController");
const BlogsController= require("../controllers/BlogsController");
const Middleware = require("../middlewares/auth");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/authors", AuthorController.createAuthor)
router.post("/blogs/:userId",Middleware.authenticate,BlogsController.createBlog)
router.get("/getblogs",BlogsController.findBlogs)
// router.get("/filterblogs",BlogsController.filterBlogs)
router.put("/updateblogs/:blogid",Middleware.authenticate,Middleware.authorise,BlogsController.updateBlogs)
router.delete("/delblogs/:blogid",Middleware.authenticate,Middleware.authorise,BlogsController.deleteBlog)
router.delete("/delblogbyparam",BlogsController.deleteBlogsByparams )
router.post("/loginUser",AuthorController.loginUser)


module.exports = router;

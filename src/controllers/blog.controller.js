const Blog = require("../models/blog.model");

exports.blogs = function (req, res) {
    Blog.find({}, function(err, blogs){
        if(err){
          console.log(err);
        } else{
            res.send(blogs);
        }
    });
};

exports.blog = function (req, res) {
    Blog.findById(req.params.id, function (err, blog) {
        if (err) return next(err);
        res.send(blog);
    })
};

exports.delete = function (req, res) {
    Blog.findByIdAndRemove(req.params.id, {$set: req.body}, function (err, blog) {
        if (err) return next(err);
        res.send('User deleted successfully.');
    });
};

exports.update = function (req, res) {
    Blog.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, blog) {
        if (err) return next(err);
        res.send('User updated successfully.');
    });
}; 

exports.create=function(req,res){
    let blog=new Blog({
          blogName : req.body.blogName,
          blogContent  : req.body.blogContent,
          blogCategory : req.body.blogCategory,
          blogAuthor : req.body.blogAuthor,
          userId : req.body.userId,
          blogComments: [],
          blogTags: [],
          blogLikes : 0,
          blogDislikes : 0,
          blogRating : [],
          blogImage : req.body.blogImage,
          blogHidden: false,
          blogFavorite : false, 
    });
    blog.save(function (err) {
        if (err) {
           console.log(err);
        }else{
            res.send('Blog Created successfully');
        }
    });
 
};
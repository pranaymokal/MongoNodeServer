const Comments = require("../models/comment.model");

exports.comments = function(req, res) {
    Comments.find({}, function(err, comments) {
    if (err) {
      console.log(err);
    } else {
      res.send(comments);
    }
  });
};

exports.comment = function(req, res) {
    Comments.findById(req.params.id, function(err, comment) {
    if (err) return next(err);
    res.send(comment);
  });
};

exports.delete = function(req, res) {
    Comments.findByIdAndRemove(req.params.id, { $set: req.body }, function(
    err,
    comment
  ) {
    if (err) return next(err);
    res.send("Comment deleted successfully.");
  });
};

exports.update = function(req, res) {
    Comments.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    comment
  ) {
    if (err) return next(err);
    res.send("Comment updated successfully.");
  });
};

exports.create = function(req, res) {
  let Comments = new Comment({
    text:req.body.text,
    author:req.body.author,
    likes:0,
    dislikes:0,
    blogId :req.body.blogId,
    eventId :req.body.eventId,
    createDate:Date.now
  });
  Comments.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Comment Created successfully");
  });
};

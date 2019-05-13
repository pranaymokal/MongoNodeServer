const image = require("../models/image.model");

exports.images = function(req, res) {
  image.find({}, function(err, images) {
    if (err) {
      console.log(err);
    } else {
      res.send(images);
    }
  });
};

exports.image = function(req, res) {
  image.findById(req.params.id, function(err, image) {
    if (err) return next(err);
    res.send(image);
  });
};

exports.delete = function(req, res) {
  image.findByIdAndRemove(req.params.id, { $set: req.body }, function(
    err,
    image
  ) {
    if (err) return next(err);
    res.send("Image deleted successfully.");
  });
};

exports.update = function(req, res) {
  image.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    image
  ) {
    if (err) return next(err);
    res.send("Image updated successfully.");
  });
};

exports.create = function(req, res) {
  let image = new image({
    image :req.body.image,
    imageCategory:req.body.imageCategory,
    imageUploder:req.body.imageUploder,
    imageUploadDate:req.body.imageUpdatedDate,
    blogId :req.body.blogId,
    eventId :req.body.eventId,
    recepieId :req.body.recepieId,
    userId : req.body.userId
  });
  image.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Image Created successfully");
  });
};

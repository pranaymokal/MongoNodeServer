const recepie = require("../models/recepie.model");

exports.recepies = function(req, res) {
  recepie.find({}, function(err, recepies) {
    if (err) {
      console.log(err);
    } else {
      res.send(recepies);
    }
  });
};

exports.recepie = function(req, res) {
  recepie.findById(req.params.id, function(err, recepie) {
    if (err) return next(err);
    res.send(recepie);
  });
};

exports.delete = function(req, res) {
  recepie.findByIdAndRemove(req.params.id, { $set: req.body }, function(
    err,
    recepie
  ) {
    if (err) return next(err);
    res.send("Recepie deleted successfully.");
  });
};

exports.update = function(req, res) {
  recepie.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    recepie
  ) {
    if (err) return next(err);
    res.send("Recepie updated successfully.");
  });
};

exports.create = function(req, res) {
  let recepie = new recepie({
    recepieName: req.body.recepieName,
    recepieCategory: req.body.recepieCategory,
    recepieAuthor: req.body.recepieAuthor,
    recepieCreated: Date.now,
    recepieContent: req.body.recepieContent,
    recepieViews: 0 ,
    recepieImage: [req.body.recepieImage],
    recepieLikes: 0,
    recepieDislikes: 0,
    recepieHidden: false,
    userId : req.body.userId ,
  });
  recepie.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Recepie Created successfully");
  });
};

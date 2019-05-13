const VerifyToken = require('../config/VerifyToken');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const config = require('../config/environment'); 
const bcrypt= require('bcryptjs');

exports.login = function(req, res) {
  User.findOne({ username : req.body.username }, function (err, user) {
    if (err) return res.status(500).send('Internal Error on the server.');
    if (!user) return res.status(404).send('No user found.');
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  });
}

exports.logout=function(req, res) {
  res.status(200).send({ auth: false, token: null });
};

exports.register= function(req, res) {
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  User.create({
    username : req.body.username,
    email : req.body.email,
    password : hashedPassword,
    firstName: req.body.firstname,
    lastName:req.body.lastname,
    gender: req.body.gender,
    contact: req.body.contact,
  }, 
  function (err, user) {
    if (err) return res.status(500).send("There was a problem registering the user`.");
    else
    res.status(201).send('User Created successfully');
  });
};

exports.other = function(req, res, next) {
  User.findById(req.userId, { password: 0 }, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send(user);
  });
}

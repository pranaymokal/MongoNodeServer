const User = require("../models/user.model");

exports.users = function (req, res) {
    User.find({}, function(err, users){
        if(err){
          console.log(err);
        } else{
            res.send(users);
        }
    });
};


exports.user = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.delete = function (req, res) {
    User.findByIdAndRemove(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('User deleted successfully.');
    });
};

exports.update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('User updated successfully.');
    });
}; 

exports.create=function(req,res){
    let user=new User({
        name: req.body.name,
        gender: req.body.gender,
        password: req.body.password,
        contact: req.body.contact
    });
    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully');
    });
 };


 exports.login = function (req, res) {
    User.findOne({ name: req.body.name, password: req.body.password}, function(err, user){
        if(err){
           res.send('Incorrect user name or password.');
        } else{
            if(user==null){
                res.send('Incorrect user name or password.');
            }else{
                res.send(user);
            }
        }
    });
};
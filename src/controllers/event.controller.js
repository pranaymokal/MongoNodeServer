const event = require("../models/event.model");

exports.events = function(req, res) {
  event.find({}, function(err, events) {
    if (err) {
      console.log(err);
    } else {
      res.send(events);
    }
  });
};

exports.event = function(req, res) {
  event.findById(req.params.id, function(err, event) {
    if (err) return next(err);
    res.send(event);
  });
};

exports.delete = function(req, res) {
  event.findByIdAndRemove(req.params.id, { $set: req.body }, function(
    err,
    event
  ) {
    if (err) return next(err);
    res.send("Event deleted successfully.");
  });
};

exports.update = function(req, res) {
  event.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    event
  ) {
    if (err) return next(err);
    res.send("Event updated successfully.");
  });
};

exports.create = function(req, res) {
  let event = new Event({
    name: req.body.name,
    description: req.body.description,
    createdDate: req.body.createdDate,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    eventStatus: req.body.eventStatus,
    eventAdmins: [req.body.eventAdmins],
    isVisible: req.body.isVisible,
    isActive: req.body.isActive,
    participants: [req.body.participants]
  });
  event.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Event Created successfully");
  });
};

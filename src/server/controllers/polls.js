var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

module.exports = {
  index: function(req, res){
    Poll.find({}, function(err, polls) {
      if (err) {
        res.json({message: "Failed to return all objects", error: err});
      } else {
        res.json({message: "Success", polls: polls})
      }
    });
  },

  show: function(req, res){
    var id = req.params.id;
    Poll.findOne({_id: id}, function(err, poll) {
      if (err) {
        res.json({message: "Failed to show one object", error: err});
      } else {
        res.json({message: "Success", poll: poll});
      }
    });
  },

  create: function(req, res){
    var poll = new Poll();
    poll.name = req.body.name;
    poll.question = req.body.question;
    poll.option1 = req.body.option1;
    poll.option2 = req.body.option2;
    poll.option3 = req.body.option3;
    poll.option4 = req.body.option4;
    poll.option1Vote = 0;
    poll.option2Vote = 0;
    poll.option3Vote = 0;
    poll.option4Vote = 0;
    poll.save(function(err) {
      if (err) {
        res.json({message: "Failed to create object", error: err});
      } else {
        res.json({message: "Success"});
      }
    });
  },

  upvote1: function(req, res) {
    var id = req.params.id;
    Poll.findOne({_id: id}, function(err, poll) {
      console.log(poll, "we found the poll")
      if (err) {
        res.json({message: "Failed to update an object", error: err});
      } else {
        poll.option1Vote++;
        poll.save(function(err) {
          if (err) {
            res.json({message: "Failed to update vote1", error: err});
          } else {
            res.json({message: "Success"});
          }
        })
      }
    });
  },
  upvote2: function(req, res) {
    var id = req.params.id;
    Poll.findOne({_id: id}, function(err, poll) {
      if (err) {
        res.json({message: "Failed to update an object", error: err});
      } else {
        poll.option2Vote++;
        poll.save(function(err) {
          if (err) {
            res.json({message: "Failed to update vote2", error: err});
          } else {
            res.json({message: "Success"});
          }
        })
      }
    });
  },
  upvote3: function(req, res) {
    var id = req.params.id;
    Poll.findOne({_id: id}, function(err, poll) {
      if (err) {
        res.json({message: "Failed to update an object", error: err});
      } else {
        poll.option3Vote++;
        poll.save(function(err) {
          if (err) {
            res.json({message: "Failed to update vote3", error: err});
          } else {
            res.json({message: "Success"});
          }
        })
      }
    });
  },
  upvote4: function(req, res) {
    var id = req.params.id;
    Poll.findOne({_id: id}, function(err, poll) {
      if (err) {
        res.json({message: "Failed to update an object", error: err});
      } else {
        poll.option4Vote++;
        poll.save(function(err) {
          if (err) {
            res.json({message: "Failed to update vote4", error: err});
          } else {
            res.json({message: "Success"});
          }
        })
      }
    });
  },

  delete: function(req, res) {
    var id = req.params.id;
    Poll.remove({_id: id}, function(err) {
      if (err) {
        res.json({message: "Failed to delete error", error: err});
      } else {
        res.json({message: "Success"});
      }
    });
  },

};
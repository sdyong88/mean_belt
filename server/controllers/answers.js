console.log( 'Server Controller Answers.js is up!');
var mongoose = require("mongoose");
var Answer = mongoose.model("Answer");

function AnswersController(){
  this.index = function(req, res){
    console.log("still waiting to get all Answer");
  };
  this.create = function(req,res){
    console.log("Creating a Answer!!");
    var newAnswer = new Answer({
      comment: req.body.comment,
      description: req.body.description
    });
    newAnswer.save(function(err, result){
      if(err){
        console.log("there was and error",err);
        res.json({error: "Invalid credentials"});
      } else {
        console.log("Answer was Successful");
        res.json(result);
      }
    });
  };

  this.update = function(req, res){
    console.log("Dude....theres no Update function");
  };

  this.delete = function(req,res){
    console.log("No deleting function.....yet");
  };

  this.show = function(req,res){
    console.log("the show one answer! function is being called");
  };
}
module.exports = new AnswersController();

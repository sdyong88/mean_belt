console.log( 'Server Controller Questions.js is up!');
var mongoose = require("mongoose");
var Question = mongoose.model("Question");

function QuestionsController(){
  this.index = function(req, res){
    console.log("still waiting to get all Questions");
  };

  this.create = function(req,res){
    var newQuestion = new Question({
      title: req.body.title,
      description: req.body.description
    });
    newQuestion.save(function(err,result){
      if(err){
        console.log("there was an error saving this question",err);
        res.json({error: "invalid credentials:"});
      } else {
        console.log("success in creating the question");
        res.json(result);
      }
    });
  };

  this.show = function(req,res){
    Question.find({})
      .populate("_questions")
      .exec(function(err, questions){
        if(err){
          console.log("error",err);
        } else {
          res.json(questions);
        }
      });
  };

  this.shows = function(req, res){
    console.log('shows:',req.params.id);
    Question.find({_id: req.params.id}, function(err,data){
      if(err){
        console.log("error");
      } else {
        res.json(data);
      }
    });
  };
}


module.exports = new QuestionsController();

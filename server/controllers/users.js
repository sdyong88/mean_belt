console.log( 'Server Controller Users.js is up!');
var mongoose = require("mongoose");
var User = mongoose.model("User");

function UsersController(){

  this.create = function(req,res){
    console.log("Creating a User!",req.body);
    var newUser = new User({
      name: req.body.name
    });
    newUser.save(function(err,result){
      if(err){
        console.log("Error:", err);
        res.json({error: "invalid credentials:"});
      } else {
        console.log("====save was successful!");
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
    console.log("the show one question function is being called");
  };
}


module.exports = new UsersController();

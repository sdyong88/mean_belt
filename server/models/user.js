console.log("User Model");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  answers:[{type: Schema.Types.ObjectId, ref:'Answers'}],
  questions:[{type: Schema.Types.ObjectId, ref:'Questions'}]
}, {timestamps: true});

var User = mongoose.model("User", UserSchema);

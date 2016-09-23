console.log("Question Model");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String},
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps: true});

var Question = mongoose.model("Question", QuestionSchema);

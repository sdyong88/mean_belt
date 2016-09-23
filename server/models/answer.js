console.log("Answer Model");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
  comment: {type: String, required: true},
  description: {type: String},
  _user: {type:Schema.Types.ObjectId, ref: 'User'},
  _question: {type: Schema.Types.ObjectId, ref: 'Question'}
}, {timestamps: true});

var Answer = mongoose.model("Answer", AnswerSchema);

var path = require('path'),
    mongoose = require('mongoose'),
    answers = require('../controllers/answers.js'),
    users = require('../controllers/users.js'),
    questions = require('../controllers/questions.js');

console.log('routes.js is up');
module.exports = function(app){
  app.get('/', function(req, res){
    res.render('./client/index.html');
  });
  // Questions and answer Routes
  app.post('/users', users.create);
  app.post('/questions', questions.create);
  app.get('/questions', questions.show);
  app.get('/question/:id', questions.shows);
  app.post('/answers', answers.create);
};

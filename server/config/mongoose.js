console.log('mongo connection.... mongoose setup');

var mongoose = require('mongoose'),
    fs = require('fs'),
    reg = new RegExp(".js$","i"),
    dbURI = 'mongodb://localhost/mean_belt',
    path = require('path');

mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
  console.log('Mongoose default connection open to ${dbURI}');
});
mongoose.connection.on('error', function(err){
  console.log("Mongoose default connection error: ${err}");
});
mongoose.connection.on('disconnected',function(){
  console.log("Mongoose default connection disconnected");
});
process.on("SIGINT", function(){
  mongoose.connection.close(function(){
    console.log("Mongoose default connection disconnected through app termination");
    process.exit(0);
  });
});

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') >= 0){
    require(models_path + '/' + file);
  }
});

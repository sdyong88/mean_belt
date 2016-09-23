var express = require('express'),
    path = require('path'),
    root = __dirname,
    bp = require('body-parser'),
    mongoose = require('mongoose'),
    app = express();


app.use(express.static(path.join(root,'./client')));
app.use(express.static(path.join(root,'./bower_components')));
app.use(bp.json());


require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');

routes_setter(app);

app.listen(8000, function(){
  console.log("server on port 8000");
});

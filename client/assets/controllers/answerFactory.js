app.factory('answerFactory',['$http', function($http){

  var answer = [];
  var answers = [];
  var factory = {};

  function AnswerFactory(){
    var _this = this;
    this.create = function(newAnswer,callback){
      $http.post('/answers',newAnswer).then(function(returned_data){
        if (typeof(callback) == 'function'){
          callback(returned_data.data);          
        }
      });
    };
  }
  return new AnswerFactory();
}]);

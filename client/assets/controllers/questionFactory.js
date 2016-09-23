app.factory('questionFactory',['$http', function($http){

  var questions = [];
  var factory = {};

  function QuestionFactory(){
    var _this = this;
    this.create = function(newQuestion,callback){
      $http.post('/questions',newQuestion).then(function(returned_data){
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };

    this.index = function(callback){
      $http.get('/questions').then(function(returned_data){
        questions = returned_data.data;
        callback(questions);
      });
    };

    this.show = function(id, callback){
      $http.get('/question/'+id).then(function(returned_data){
        question = returned_data.data;
        callback(question);
      });
    };
  }
  return new QuestionFactory();
}]);

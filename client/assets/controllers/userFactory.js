
app.factory('userFactory',['$http','$routeParams', function($http, $routeParams){
  var user = [];
  var users = [];

  function UserFactory(){
    var _this = this;
    this.create = function(newUser,callback){
      $http.post('/users',newUser).then(function(returned_data){
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
      
    this.show = function(id,callback){
      console.log(id);
    };

    this.createQuestion = function(newQuestion, callback){
      console.log('factory', newQuestion);
      // $http.post('/questions', newQuestion).then(function(returned_data){
      //   if(typeof(callback) == 'function'){
      //     callbcak(returned_data.data);
      //   }
      // });
    };

    };
  }

  return new UserFactory();
}]);

var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: './partials/index.html',
    controller: 'userController'
  })
  .when('/dashboard',{
    templateUrl: './partials/dashboard.html',
    controller:'userController'
  })
  .when('/questions',{
    templateUrl: './partials/questions.html',
    controller:'questionController'
  })
  .when('/question/:id',{
    templateUrl: './partials/question.html',
    controller: 'questionController'
  })
  .when('/answer/:id',{
    templateUrl: './partials/answer.html',
    controller:'answerController'
  })
  .otherwise({
    redirectTo: '/'
  });
});

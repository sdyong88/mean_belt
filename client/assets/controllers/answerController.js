app.controller('answerController',['$scope','answerFactory','$location','$routeParams', function($scope, answerFactory, $location,$routeParams){

  $scope.question = $routeParams.id;
  $scope.createAnswer = function(){
    console.log($scope.answer);
    answerFactory.create($scope.answer, function(data){
      console.log(data);
      $location.path('/dashboard');
    });
  };
}]);

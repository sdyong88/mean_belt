app.controller('answerController',['$scope','answerFactory','$location','userFactory','$routeParams', function($scope, answerFactory, $location, userFactory,$routeParams){

  console.log($routeParams.id);
  $scope.createAnswer = function(){
    console.log($scope.answer);
    answerFactory.create($scope.answer, function(data){
      console.log(data);
      $location.path('/dashboard');
    });
  };
}]);

app.controller('questionController',['$scope','questionFactory','$location','$routeParams', function($scope, questionFactory, $location, $routeParams){
  console.log($location.url());
  questionFactory.show($routeParams.id, function(data){
    console.log(data);
    $scope.question = data;
  });
  $scope.createQuestion = function(){
    questionFactory.create($scope.question, function(data){
      console.log(data);
      $location.path('/dashboard');
    });
  };

}]);

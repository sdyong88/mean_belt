app.controller('userController',['$scope','userFactory','$location','questionFactory', function($scope, userFactory, $location,questionFactory){

  $scope.addUser = function(){
    userFactory.create($scope.user, function(data){
      // console.log(data);
      $scope.persons = data;

      $location.path('/dashboard');
    });
  };

  questionFactory.index(function(returnedData){
    $scope.questions = returnedData;
    console.log($scope.questions);
  });





}]);

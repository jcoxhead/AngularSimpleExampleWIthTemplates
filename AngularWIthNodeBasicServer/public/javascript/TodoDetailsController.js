(function() {
      angular.module('app')
        .controller('TodoDetailsController', ['$scope', '$routeParams', 'Todos', '$location', TodoDetailsController]);
        
      function TodoDetailsController($scope, $routeParams, Todos, $location){
          $scope.todo = Todos.get({id: $routeParams.id });

          $scope.update = function(){
            Todos.update({id: $scope.todo._id}, $scope.todo, function(){
              $location.url('/');
            });
          }

          $scope.remove = function(){
            Todos.remove({id: $scope.todo._id}, function(){
              $location.url('/');
            });
          }
        }      
})();


(function() {
    angular.module('app')
       .config(['$routeProvider', routes]);

      function routes($routeProvider)
      {

          $routeProvider
            .when('/', {
              templateUrl: '/todos.html',
              controller: 'TodoController'
            })

            .when('/:id', {
              templateUrl: '/todoDetails.html',
              controller: 'TodoDetailsController'
           });
      }
})();
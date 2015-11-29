(function()
{
	var app = angular.module('app', ['ngRoute', 'ngResource']);

	app.factory('Todos', ['$resource', function($resource){
          return $resource('/todos/:id', null, {
            'update': { method:'PUT' }
          });
        }]);

})();
angular.module('app.controllers')
.controller('ListCtrl', function($scope, $http, $window) {
	
	$scope.users = [];
	
	$http.get('http://localhost:8082/clientes')
	.success(function(lista) {
		$scope.users = lista;
	})
	.error(function(erro) {
		console.log(erro);
	});	
	
	$scope.remove = function(userId){
  
		$http.delete('http://localhost:8082/clientes/' + userId)
		.success(function(retorno) {
			console.log(retorno);
			$window.location.reload(); /*TODO REFATORAR PARA NAO PRECISAR USAR ISSO*/
		})
		.error(function(erro) {
			console.log(erro);
		});
	  
	}
	
});
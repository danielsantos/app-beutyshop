angular.module('app.controllers')
.controller('HorariosCtrl', function($scope, $state, $http, $window) {
	
	$scope.users = [];
	
	$http.get('https://api-beutyshop.herokuapp.com/horarios')
	.success(function(lista) {
		$scope.users = lista;
	})
	.error(function(erro) {
		console.log(erro);
	});	
	
	$scope.clientes = [];
	
	$http.get('https://api-beutyshop.herokuapp.com/clientes')
	.success(function(clientes) {
		$scope.clientes = clientes;
	})
	.error(function(erro) {
		console.log(erro);
	});
	
	$scope.remove = function(userId){
  
		$http.delete('https://api-beutyshop.herokuapp.com/horarios/' + userId)
		.success(function(retorno) {
			console.log(retorno);
			$window.location.reload(); /*TODO REFATORAR PARA NAO PRECISAR USAR ISSO*/
		})
		.error(function(erro) {
			console.log(erro);
		});
	  
	}
	
});
angular.module('app.controllers')
.controller('NovoCtrl', function($scope, $state, $http, $window) {
	
	$scope.cliente = {};
	$scope.servicos = [];
	
	$http.get('https://api-beutyshop.herokuapp.com/clientes/' + $state.params.clienteId)
	.success(function(cliente) {
		$scope.cliente = cliente;
	})
	.error(function(erro) {
		console.log(erro);
	});
	
	$http.get('https://api-beutyshop.herokuapp.com/servicos')
	.success(function(servicos) {
		$scope.servicos = servicos;
	})
	.error(function(erro) {
		console.log(erro);
	});
	
});
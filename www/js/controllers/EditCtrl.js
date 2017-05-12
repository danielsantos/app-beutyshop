angular.module('app.controllers')
.controller('EditCtrl', function($scope, $state, $http, $window){
	
	$scope.user = {};
	
	$http.get('https://api-beutyshop.herokuapp.com/clientes/' + $state.params.userId)
	.success(function(usuario) {
		$scope.cliente = usuario;
	})
	.error(function(erro) {
		console.log(erro);
	});
		
});
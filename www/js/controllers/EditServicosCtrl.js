angular.module('app.controllers')
.controller('EditServicosCtrl', function($scope, $state, $http, $window){
	
	$scope.user = {};
	
	$http.get('https://api-beutyshop.herokuapp.com/servicos/' + $state.params.userId)
	.success(function(servico) {
		$scope.servico = servico;
	})
	.error(function(erro) {
		console.log(erro);
	});
		
});
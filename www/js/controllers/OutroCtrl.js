angular.module('app.controllers')
.controller('OutroCtrl', function($scope, $state, $http, $window) {
	
	$scope.horario = {};
	
	$scope.agoravai = function(clienteId, servicos){

		$scope.horario = {
			
			"cliente" : {
				"id" : clienteId
			},
			
			"servicos" : [servicos[0],servicos[1],servicos[2]]
			
		};
		
		console.log($scope.horario);
		
		$http.post('https://api-beutyshop.herokuapp.com/horarios', $scope.horario)
		.success(function(retorno) {
			
			$state.go('menu.listClientes');
			$window.location.reload();
			
		})
		.error(function(erro) {
			console.log(erro);
		});
	  
	};
	
});
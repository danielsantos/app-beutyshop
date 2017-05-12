angular.module('app.controllers', [])
.controller('mainCtrl', function ($scope, $stateParams, $http, $window, $state) {
	
	$scope.saveCliente = function(cliente){
		
		$http.post('https://api-beutyshop.herokuapp.com/clientes', cliente)
		.success(function(retorno) {
			
			$http.get('https://api-beutyshop.herokuapp.com/clientes')
			.success(function(lista) {
				$scope.users = lista;
			})
			.error(function(erro) {
				console.log(erro);
			});
			
			$state.go('menu.listClientes');
			$window.location.reload();
			
		})
		.error(function(erro) {
			console.log(erro);
		});
	  
    };
	
	$scope.saveServico = function(servico){
		
		$http.post('https://api-beutyshop.herokuapp.com/servicos', servico)
		.success(function(retorno) {
			
			$http.get('https://api-beutyshop.herokuapp.com/servicos')
			.success(function(lista) {
				$scope.users = lista;
			})
			.error(function(erro) {
				console.log(erro);
			});
			
			$state.go('menu.listServicos');
			$window.location.reload();
			
		})
		.error(function(erro) {
			console.log(erro);
		});
	  
    };

});
angular.module('app.controllers', [])
.controller('mainCtrl', function ($scope, $stateParams, $http, $window, $state, DatabaseValues) {
	
	$scope.usuarios = [];

	DatabaseValues.setup();
	DatabaseValues.bancoDeDados.transaction(function(transacao) {
		
		transacao.executeSql('SELECT * FROM usuario', [], function(transacao, resultados) {

			for (var i = 0; i < resultados.rows.length; i++) {
				$scope.usuarios.push(resultados.rows[i]);
			}
		
		});
	});
	
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
	
	$scope.saveUsuario = function(usuario) {
		
		DatabaseValues.setup();
		DatabaseValues.bancoDeDados.transaction(function(transacao) {
			
			transacao.executeSql('INSERT INTO usuario (nome) VALUES (?)', [usuario.nome]);
			
		});
	  
    };	

});
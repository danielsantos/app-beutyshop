angular.module('app.controllers', [])
.controller('MainUsuariosCtrl', function ($scope, $stateParams, $http, $window, $state, DatabaseValues) {
	
	$scope.usuarios = [];

	DatabaseValues.setup();
	DatabaseValues.bancoDeDados.transaction(function(transacao) {
		
		transacao.executeSql('SELECT * FROM usuario', [], function(transacao, resultados) {

			for (var i = 0; i < resultados.rows.length; i++) {
				$scope.usuarios.push(resultados.rows[i]);
			}
		
		});
	});
	
	$scope.saveUsuario = function(usuario) {
		
		DatabaseValues.setup();
		DatabaseValues.bancoDeDados.transaction(function(transacao) {
			
			transacao.executeSql('INSERT INTO usuario (nome) VALUES (?)', [usuario.nome]);
			
		});
	  
    };	

});
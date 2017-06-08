angular.module('app.controllers')
.controller('ListUsuariosCtrl', function($scope, $http, $window, DatabaseValues, $state) {
	
	$scope.usuarios = [];

	DatabaseValues.setup();
	DatabaseValues.bancoDeDados.transaction(function(transacao) {
		
		transacao.executeSql('SELECT * FROM usuario', [], function(transacao, resultados) {

			for (var i = 0; i < resultados.rows.length; i++) {
				$scope.usuarios.push(resultados.rows[i]);
			}
		
		});
	});	
	
	$scope.removeUsuario = function(usuarioId) {
		
		DatabaseValues.setup();
		DatabaseValues.bancoDeDados.transaction(function(transacao) {
			transacao.executeSql('DELETE FROM usuario WHERE id = ?', [usuarioId]);
		});
	  
		// RELOAD AQUI
		
		$state.go($state.current, {}, {reload: true}); 
	  
    };
	
});
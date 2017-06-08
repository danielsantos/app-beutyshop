angular.module('app.controllers')
.controller('ListUsuariosCtrl', function($scope, $http, $window) {
	
	$scope.usuarios = [];

	DatabaseValues.setup();
	DatabaseValues.bancoDeDados.transaction(function(transacao) {
		
		transacao.executeSql('SELECT * FROM usuario', [], function(transacao, resultados) {

			for (var i = 0; i < resultados.rows.length; i++) {
				$scope.usuarios.push(resultados.rows[i]);
			}
		
		});
	});
	
});
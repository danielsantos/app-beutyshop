angular.module('app.controllers')
.controller('EditUsuariosCtrl', function($scope, $state, $http, $window, DatabaseValues){
	
	$scope.usuario = {};

	DatabaseValues.setup();
	DatabaseValues.bancoDeDados.transaction(function(transacao) {
		
		transacao.executeSql('SELECT * FROM usuario WHERE id = ?', [$state.params.userId], function(transacao, resultados) {

			$scope.usuario = resultados.rows[0];
			$scope.dataSelecionada = resultados.rows[0].dataNascimento;
		
		});
	});
	
	
		
});
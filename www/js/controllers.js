angular.module('app.controllers', [])
.controller('mainCtrl', function ($scope, $stateParams, $http, $window, $state, $ionicPopup, DatabaseValues, $filter, ionicDatePicker) {
	
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
	
	$scope.convertToDate = function (stringDate){
		
		var dateOut = new Date(stringDate);
		dateOut.setDate(dateOut.getDate() + 1);
		return dateOut;
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
		
		if (usuario.id) {

			DatabaseValues.bancoDeDados.transaction(function(transacao) {
				transacao.executeSql('UPDATE usuario SET nome = ? , ' +
				                                       ' dataNascimento = ? WHERE id = ?', [usuario.nome, 
																							$scope.dataSelecionada, 
																							usuario.id]);
			});
			
			$ionicPopup.alert({
				title: 'Usuário Alterado',
				template: 'Usuário alterado com sucesso!'
			}).then(function(){
				$state.go('menu.listUsuarios');
			});
		
		} else {
			
			DatabaseValues.bancoDeDados.transaction(function(transacao) {
				transacao.executeSql('INSERT INTO usuario (nome, dataNascimento) VALUES ( ? , ? )', [usuario.nome, $scope.dataSelecionada]);
			});
			
			$ionicPopup.alert({
				title: 'Usuário Cadastrado',
				template: 'Usuário cadastrado com sucesso!'
			}).then(function(){
				$state.go('menu.listUsuarios');
			});
		
		}
		
	  
    };	
	
	$scope.abrirPopupCalendario = function(){
		
		var configuracoes = {
			callback : function(data){
				$scope.dataSelecionada = new Date(data);
			},

			weeksList : ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
		}

		ionicDatePicker.openDatePicker(configuracoes);

	}


});
angular.module('app.controllers', [])
.controller('mainCtrl', function ($scope, $stateParams, $http, $window, $state) {
	
	$http.get('http://localhost:8082/clientes')
	.success(function(lista) {
		$scope.listaDeUsuarios = lista;
	})
	.error(function(erro) {
		console.log(erro);
	});
	
	$scope.cadastrar = function (usuario) {
			
		$http.post('http://localhost:8082/clientes', usuario)
		.success(function(retorno) {
			console.log(retorno);
		})
		.error(function(erro) {
			console.log(erro);
		});

	};
	
	$scope.atualizar = function (usuario) {
			
		$http.put('http://localhost:8082/clientes' + usuario.id, usuario)
		.success(function(retorno) {
			console.log(retorno);
		})
		.error(function(erro) {
			console.log(erro);
		});

	};	
	
	$scope.excluir = function (usuario) {
			
		$http.delete('http://localhost:8082/clientes' + usuario.id)
		.success(function(retorno) {
			console.log(retorno);
		})
		.error(function(erro) {
			console.log(erro);
		});

	};	
	
	
	$scope.save = function(cliente){
		
		$http.post('http://localhost:8082/clientes', cliente)
		.success(function(retorno) {
			
			$http.get('http://localhost:8082/clientes')
			.success(function(lista) {
				$scope.users = lista;
			})
			.error(function(erro) {
				console.log(erro);
			});
			
			$state.go('menu.list');
			$window.location.reload();
			
		})
		.error(function(erro) {
			console.log(erro);
		});
	  
    };
	

	/*
	$scope.save = function(cliente) {
		
		alert('opa');
		
		cliente.id = $state.params.userId;
		
		$http.put('http://localhost:8082/clientesbbb' + $scope.user.id, cliente)
		.success(function(retorno) {
			
			$http.get('http://localhost:8082/clientes')
			.success(function(lista) {
				$scope.users = lista;
			})
			.error(function(erro) {
				console.log(erro);
			});
			
			$state.go('menu.list');
			$window.location.reload();
			
		})
		.error(function(erro) {
			console.log(erro);
		});
      
    };
	*/
	
});
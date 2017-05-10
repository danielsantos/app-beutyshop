angular.module('app.controllers')
.controller('EditCtrl', function($scope, $state, $http, $window){
	 
    /*TODO CRIAR UMA SERVICE*/	 
	//$scope.user = angular.copy(UserStore.get($state.params.userId));
	$scope.user = {};
	
	$http.get('http://localhost:8082/clientes/' + $state.params.userId)
	.success(function(usuario) {
		$scope.cliente = usuario;
	})
	.error(function(erro) {
		console.log(erro);
	});
	
	
    $scope.save = function(cliente) {
		
		alert('opa');
		
		cliente.id = $state.params.userId;
		
		$http.put('http://localhost:8082/clientes/' + $scope.user.id, cliente)
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
		
});
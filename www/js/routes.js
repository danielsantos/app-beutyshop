angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'mainCtrl'
  })
  
  .state('menu.inicio', {
      url: '/inicio',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/inicio.html',
				controller: 'mainCtrl'
			}
	  }
  })
    
  // ############ CLIENTES ####################################################
  .state('menu.listClientes', {
      url: '/listClientes',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/clientes/list.html',
				controller: 'ListCtrl'
			}
	  }
  })
  
  .state('menu.add', {
      url: '/add',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/clientes/edit.html',
				controller: 'mainCtrl'
			}
	  }
  })
  
  .state('menu.edit', {
      url: '/edit/:userId',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/clientes/edit.html',
				controller: 'EditCtrl'
			}
	  }
    })  
  
  // ############ SERVICOS ####################################################
  .state('menu.listServicos', {
      url: '/listServicos',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/servicos/list.html',
				controller: 'ServicosCtrl'
			}
	  }
  })  
  
  .state('menu.addServicos', {
      url: '/addServico',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/servicos/edit.html',
				controller: 'ServicosCtrl'
			}
	  }
  })  
	
  .state('menu.editServicos', {
      url: '/editServicos/:userId',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/servicos/edit.html',
				controller: 'EditServicosCtrl'
			}
	  }
    }) 	

  $urlRouterProvider.otherwise('/side-menu21/inicio')

});
angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    
	.state('menu.jogosDisponVeis', {
			url: '/page1',
			views: {
				'side-menu21': {
					templateUrl: 'templates/cadastrar.html',
					controller: 'mainCtrl'
			}
		}
	})

  .state('menu.jogos', {
    url: '/jogos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/excluir.html',
        controller: 'mainCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'mainCtrl'
  })

  .state('menu.meusJogos', {
    url: '/meusJogos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/atualizar.html',
        controller: 'mainCtrl'
      }
    }
  })
    
  .state('menu.add', {
      url: '/add',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/edit.html',
				controller: 'mainCtrl'
			}
	  }
  })
  
  .state('menu.addServico', {
      url: '/addServico',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/editServico.html',
				controller: 'mainCtrl'
			}
	  }
  })  
  
  .state('menu.listClientes', {
      url: '/listClientes',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/listClientes.html',
				controller: 'ListCtrl'
			}
	  }
  })
  
  .state('menu.listServicos', {
      url: '/listServicos',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/listServicos.html',
				controller: 'ListServicosCtrl'
			}
	  }
  })  
  
  .state('menu.edit', {
      url: '/edit/:userId',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/edit.html',
				controller: 'EditCtrl'
			}
	  }
    })  
	
  .state('menu.editServicos', {
      url: '/editServicos/:userId',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/editServicos.html',
				controller: 'EditServicosCtrl'
			}
	  }
    }) 	
  
  .state('menu.dadosCadastrais', {
    url: '/dadosCadastrais',
    views: {
      'side-menu21': {
        templateUrl: 'templates/listar.html',
        controller: 'mainCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/side-menu21/listClientes')

});
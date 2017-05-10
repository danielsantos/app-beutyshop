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
  
  .state('menu.list', {
      url: '/list',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/list.html'//,
				//controller: 'ListarCtrl'
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
  
  .state('menu.dadosCadastrais', {
    url: '/dadosCadastrais',
    views: {
      'side-menu21': {
        templateUrl: 'templates/listar.html',
        controller: 'mainCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/side-menu21/list')

});
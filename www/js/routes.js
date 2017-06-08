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
  

  // ############ USUARIOS ####################################################
  .state('menu.listUsuarios', {
      url: '/listUsuarios',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/usuarios/list.html',
				controller: 'ListUsuariosCtrl'
			}
	  }
  })
  
  .state('menu.addUsuarios', {
      url: '/addUsuarios',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/usuarios/edit.html',
				controller: 'mainCtrl'
			}
	  }
  })
  
  .state('menu.editUsuarios', {
      url: '/editUsuarios/:userId',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/usuarios/edit.html',
				controller: 'EditUsuariosCtrl'
			}
	  }
    })  
  
    
  // ############ CLIENTES ####################################################
  .state('menu.listClientes', {
      url: '/listClientes',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/clientes/list.html'//,
				//controller: 'ListCtrl'
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
	
  // ############ HORARIOS ####################################################
  .state('menu.listHorarios', {
      url: '/listHorarios',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/horarios/list.html',
				controller: 'HorariosCtrl'
			}
	  }
  }) 
  
  .state('menu.addHorario', {
      url: '/addHorario',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/horarios/edit.html',
				controller: 'HorariosCtrl'
			}
	  }
  })  
  
  .state('menu.selecionaCliente', {
      url: '/selecionaCliente/:clienteId',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/horarios/selecionaServicos.html',
				controller: 'NovoCtrl'
			}
	  }
    }) 	
	
  .state('menu.teste', {
      url: '/agenda/:clienteId/:servicos',
	  views : {
			'side-menu21' : {
				templateUrl: 'templates/servicos/edit.html',
				controller: 'OutroCtrl'
			}
	  }
    }) 	

  $urlRouterProvider.otherwise('/side-menu21/inicio')

});
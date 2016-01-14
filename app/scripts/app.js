(function(){

    angular.module('angularSpa', ['ngRoute','ngCookies','ngResource'])
    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
          })
        .when('/ofertas', {
            templateUrl: 'views/misOfertas.html',
            controller: 'MisOfertasCtrl'
          })
        .when('/buscarOfertaAvanzada', {
            templateUrl: 'views/buscarOfertaAvanzada.html',
            controller: 'BuscarOfertaAvanzadaCtrl'
          })
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
          })
        .when('/oferta/:id', {
            templateUrl: 'views/oferta_show.html',
            controller: 'OfertaShowCtrl',
          })
          .when('/oferta/edit/:id', {
            templateUrl: 'views/oferta_edit.html',
            controller: 'OfertaEditCtrl'
          })
          .when('/usuario/perfil', {
            templateUrl: 'views/perfilUsuario.html',
            controller: 'PerfilUsuarioCtrl'
          })
        .otherwise({
            redirectTo: '/'
          });
    });

})();



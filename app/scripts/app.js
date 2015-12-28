(function(){

    angular.module('angularSpa', [
    'ngRoute'
    ])
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
        .when('/login', {
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
        .otherwise({
            redirectTo: '/home'
          });
    });

})();


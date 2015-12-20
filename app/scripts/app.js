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
        .when('/misOfertas', {
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
            templateUrl: 'views/oferta.html',
            controller: 'MisOfertasCtrl'
          })
        .otherwise({
            redirectTo: '/home'
          });
    });

})();


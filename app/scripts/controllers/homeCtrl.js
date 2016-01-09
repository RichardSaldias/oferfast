angular.module('angularSpa')
    .controller('HomeCtrl', function($scope, ofertasService, $routeParams, $cookieStore){
        $scope.ofertas = [];
        function getOfertas(){
            ofertasService.getOfertas()
            .success(function(data){
                $scope.ofertas = data;
                $scope.status = 'Todo funciona bien';
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores, "asadmin start-domain" arreglaria el problema';
            });
        }
        getOfertas();
        $scope.name = $cookieStore.get('nombreuser');
        $scope.mostrarCookieSesion = function(){
            $window.alert($cookieStore.get('nombreuser'));
        };
});

angular.module('angularSpa')
    .controller('MisOfertasCtrl', function($scope, ofertasService, $routeParams){
        $scope.actors = [];
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
        function getOferta(){
            ofertasService.getOferta($routeParams.id)
            .success(function(data){
                $scope.actorOnly = data;
            });
        }
        getOferta();

        $scope.doTheBack = function() {
        window.history.back();
};
});

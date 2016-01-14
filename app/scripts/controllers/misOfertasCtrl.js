angular.module('angularSpa')
    .controller('MisOfertasCtrl', function($scope, ofertasService, $routeParams,$cookieStore){
        
        function getMisOfertas(){
            $scope.session = $cookieStore.get('sesion');
            ofertasService.getMisOfertas($scope.session.usuarioId)
            .success(function(data){
                $scope.ofertas = data;
                $scope.status = 'Todo funciona bien';
            })
            .error(function(error){
                $scope.status = 'Error al consultar';
            });
        }
        getMisOfertas();

        $scope.doTheBack = function() {
        window.history.back();
};
});

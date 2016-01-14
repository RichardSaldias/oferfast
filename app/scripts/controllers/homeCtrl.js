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
                $scope.status = 'Error al consultar';
            });
        }
        getOfertas();
        $scope.ofertasImg = [];
        function getImgOfertas(){
            ofertasService.getImgOfertas()
            .success(function(data){
                $scope.ofertasImg = data;
                $scope.status = 'Todo funciona bien';
            })
            .error(function(error){
                $scope.status = 'Error al consultar';
            });
        }
        getImgOfertas();
       

});


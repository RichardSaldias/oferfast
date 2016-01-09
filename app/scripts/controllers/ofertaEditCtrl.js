angular.module('angularSpa')
    .controller('OfertaEditCtrl', function($scope, ofertasService, $routeParams){
        function getOferta(){
            ofertasService.getOferta($routeParams.id)
            .success(function(data){
                $scope.textButton = "Editar usuario"
                $scope.ofertaOnly = data;
               console.log( $scope.ofertaOnly.ofertaId);
            });
        }
        getOferta();

        $scope.doTheBack = function() {
        window.history.back();
};
});

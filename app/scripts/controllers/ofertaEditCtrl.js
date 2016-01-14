angular.module('angularSpa')
    .controller('OfertaEditCtrl', function($scope, ofertasService, $routeParams,$location){
        

        $scope.submit = function(oferta_id,titleEdit,descriptionEdit,precioEdit){
            ofertasService.putOferta($routeParams.id,$scope.ofertaOnly.title,$scope.ofertaOnly.description,$scope.ofertaOnly.price)
            .success(function(data){
                $scope.OfertaEditada = data;   
                    alert($scope.OfertaEditada.INFO);   
                    $location.url("/oferta/" + $routeParams.id);
            });
        };

        function getOferta(){
            ofertasService.getOferta($routeParams.id)
            .success(function(data){
                $scope.ofertaOnly = data;
            });
        } 
        getOferta();

        $scope.doTheBack = function() {
        window.history.back();
    };

});


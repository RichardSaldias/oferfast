angular.module('angularSpa')
    .controller('OfertaShowCtrl', function($scope, ofertasService, $routeParams,$cookieStore,$location){
        function getOferta(){
            ofertasService.getOferta($routeParams.id)
            .success(function(data){
                $scope.ofertaOnly = data;
                console.log( $scope.ofertaOnly.ofertaId);
            });
        }
        getOferta();

        $scope.getOfertaComentarios = [];
        function getOfertaComentarios(){
            ofertasService.getOfertaComentarios($routeParams.id)
            .success(function(data){
                $scope.comentarios = data;
                $scope.status = 'Todo funciona bien';
            })
            .error(function(error){
                $scope.status = 'Error al consultar';
            });
        }
        getOfertaComentarios();

        $scope.getEtiquetas = [];
        function getEtiquetas(){
            ofertasService.getEtiquetas($routeParams.id)
            .success(function(data){
                $scope.etiquetas = data;
                $scope.status = 'Todo funciona bien';
            })
            .error(function(error){
                $scope.status = 'Error al consultar';
            });
        }
        getEtiquetas();

         $scope.comentar = {text: ''};
         $scope.submit = function(usuario_id,oferta_id,textComentario){
            $scope.session = $cookieStore.get('sesion');
            console.log($scope.session.usuarioId + $routeParams.id + $scope.comentar.text);
            ofertasService.postComentario($scope.session.usuarioId,$routeParams.id,$scope.comentar)
            .success(function(data){
            window.location.reload();
            });
        };

        $scope.doTheBack = function() {
        window.history.back();
        };
 
});

angular.module('angularSpa')
    .controller('OfertaShowCtrl', function($scope, actorsService, $routeParams){
        $scope.actors = [];
        function getActor(){
            actorsService.getActor($routeParams.id)
            .success(function(data){
                $scope.actorOnly = data;
                console.log( $scope.actorOnly.actorId);
            });
        }
        getActor();

        $scope.doTheBack = function() {
        window.history.back();
};
});

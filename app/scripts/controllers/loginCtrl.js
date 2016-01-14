angular.module('angularSpa')
    .controller('LoginCtrl', function($scope,$location, $cookieStore,$resource,ofertasService){
        // Inicia una session
    	$scope.submit = function(nameUser,passUser){
              ofertasService.getSesion($scope.username,$scope.password)
            .success(function(data){
                $scope.SessionOnly = data;
                //console.log( $scope.SessionOnly.username);
                //alert($scope.SessionOnly.username);
                if ($scope.SessionOnly.INFO=='Loggeado'){
                    $cookieStore.put('sesion',$scope.SessionOnly);
                    $location.url("/home");
                    window.location.reload();
                } else {
                    alert($scope.SessionOnly.INFO);
                }
                 
            });
           

    	};

        ///////////////////////////////// testing
        function getSesion(nameUser,passUser){

            ofertasService.getSesion($scope.username,$scope.password)
            .success(function(data){
                $scope.SessionOnly = data;
                console.log( $scope.SessionOnly.username);
                alert($scope.SessionOnly.username);
            });
        }
        

        //Post = $resource("http://localhost:9090/OFERFAST_BD/usuarios/login",{username: "@username",password: "@password"});
        //$scope.posts = Post.query();
});








   







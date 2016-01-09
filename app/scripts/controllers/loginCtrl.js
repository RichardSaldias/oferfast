angular.module('angularSpa')
    .controller('LoginCtrl', function($scope,$location, $cookieStore,$resource,ofertasService){
    	   
        /*
            $scope.submitejemplo = function(){
	    		var nombre = $scope.username;
	    		var password = $scope.password;
	    		if($scope.username == 'admin' && $scope.password=='admin'){
	    			$location.path('/home');
	    		}else{
	    			alert('Usuario o contraseña incorrecta');
	    		}
    	};
    	*/
        
        // Inicia una session
    	$scope.submit = function(nameUser,passUser){
    		var nameUser = $scope.username;
            var passUser = $scope.password;
    		
              ofertasService.getSesion($scope.username,$scope.password)
            .success(function(data){
                $scope.SessionOnly = data;
                console.log( $scope.SessionOnly.username);
                alert($scope.SessionOnly.username);
                 $cookieStore.put('usuarioActual',$scope.SessionOnly.username);
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








   







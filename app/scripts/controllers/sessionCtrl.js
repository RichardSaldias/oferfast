angular.module('angularSpa')
    .controller('SessionCtrl', function($scope,$cookieStore){
        
        //Obtiene un usuario conectado
    	$scope.nameUser = $cookieStore.get('usuarioActual');
		
        //Elimina la session
    	$scope.eliminarCookieSesion = function(nameUser){
    		$cookieStore.remove('usuarioActual')
    	};

});





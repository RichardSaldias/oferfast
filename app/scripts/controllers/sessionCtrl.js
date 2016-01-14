angular.module('angularSpa')
    .controller('SessionCtrl', function($scope,$cookieStore){
        
        //Obtiene un usuario conectado
    	$scope.session = $cookieStore.get('sesion');

        //Elimina la session
    	$scope.eliminarCookieSesion = function(session){
    		$cookieStore.remove('sesion')
    		window.location.reload();
    	};
});





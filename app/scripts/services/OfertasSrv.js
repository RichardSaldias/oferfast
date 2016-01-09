angular.module('angularSpa')
    .service('ofertasService', function($http,$resource){
        var urlBase = "http://localhost:9090/OFERFAST_BD/ofertas/";
        this.getOfertas = function(){
            return $http.get(urlBase);
        };
        this.getOferta = function(oferta_id){
            return $http.get(urlBase + oferta_id);
        };
        this.getSesion = function(usernameL,passwordL){
            return $http.post('http://localhost:9090/OFERFAST_BD/usuarios/login/',{username: usernameL,password: passwordL})

        };
        this.editOferta = function(oferta){
        	var sjson = '{"date":"{{date}}","description":"{{desc}}","imagesNumber":{{imgNum}},"listaComentarios":[],"listaEtiquetas":[],"listaImagenes":[],"ofertaId":{{ofertaid}},"price":{{price}},"title":"{{title}}","ubicationLat":{{lat}},"ubicationLon":{{lon}},"usuarioId":{{userid}},"visibleOferta":{{visibleoferta}} }'
        	sjson.replace('{{date}}',oferta.date)
        		.replace('{{desc}}',oferta.description)
        		.replace('{{imgNum}}',oferta.imagesNumber)
        		.replace('{{ofertaid}}',oferta.ofertaId)
        		.replace('{{price}}',oferta.price)
        		.replace('{{title}}',oferta.title)
        		.replace('{{ubicationLat}}',oferta.lat)
        		.replace('{{ubicationLon}}',oferta.lon)
        		.replace('{{userid}}',oferta.usuarioId)
				.replace('{{visibleoferta}}',oferta.visibleoferta)
        	
           
        };
        
    });




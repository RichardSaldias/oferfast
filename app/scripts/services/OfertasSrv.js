angular.module('angularSpa')
    .service('ofertasService', function($http,$resource){
        //var urlBaseOfertas = "http://localhost:9090/OFERFAST_BD/ofertas/";
        
        // OFERTAS
        var urlBaseOfertas = "http://191.232.33.81:8080/Oferfast_JAVA/ofertas/";
        this.getOfertas = function(){
            return $http.get(urlBaseOfertas);
        };
        this.getOferta = function(oferta_id){
            return $http.get(urlBaseOfertas + oferta_id);
        };

        this.putOferta = function(oferta_id,titleEdit,descriptionEdit,precioEdit){
            return $http.put('http://191.232.33.81:8080/Oferfast_JAVA/ofertas/' + oferta_id,{title: titleEdit,description: descriptionEdit,price: parseInt(precioEdit)});
        };

        // ETIQUETAS
        this.getEtiquetas = function(oferta_id){
            return $http.get(urlBaseOfertas + oferta_id + "/etiquetas/");
        };
        // COMENTARIOS
        this.getOfertaComentarios = function(oferta_id){
            return $http.get(urlBaseOfertas + oferta_id + "/comentarios/");
        };

        this.postComentario = function(usuario_id,oferta_id,textComentario){
            console.log('usuarioId:'+ usuario_id +' ofertaId:'+ oferta_id + ' text:'+textComentario.text);
            return $http.post('http://191.232.33.81:8080/Oferfast_JAVA/comentarios/',{usuarioId: parseInt(usuario_id), ofertaId: parseInt(oferta_id), text: textComentario.text});
        };
       

        // IMAGENES
        var urlBaseImg = "http://191.232.33.81:8080/Oferfast_JAVA/imagenes/"
        this.getImgOfertas = function(){
            return $http.get(urlBaseImg);
        };

        // USUARIOS
        this.getMisOfertas = function(user_id){
            return $http.get('http://191.232.33.81:8080/Oferfast_JAVA/usuarios/'+ user_id +'/ofertas');
        };

        this.getSesion = function(usernameSesion,passwordSesion){
           // return $http.post('http://localhost:9090/OFERFAST_BD/usuarios/login/',{username: usernameL,password: passwordL})
            return $http.post('http://191.232.33.81:8080/Oferfast_JAVA/usuarios/login/',{username: usernameSesion,password: passwordSesion})
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
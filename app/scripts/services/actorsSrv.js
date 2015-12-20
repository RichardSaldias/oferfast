angular.module('angularSpa')
    .service('actorsService', function($http){
        var urlBase = "http://localhost:9090/sakila-backend/actors/";
        this.getActors = function(){
            return $http.get(urlBase);
        };
        this.getActor = function(actorId){
            return $http.get(urlBase + actorId);
        };
    });

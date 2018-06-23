(function() {
    angular.module('app')
      .factory('LocationFactory', function() {
    
  
        return {
         getCoordinates: getCoordinates
        }

        function getCoordinates () {
            return new Promise(function(resolve, reject){
                navigator.geolocation.getCurrentPosition(function(position) {
                    var coordinates = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    resolve(coordinates);
                });
      
               })
        }
  
  
      });
  })();
  
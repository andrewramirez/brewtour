(function () {
  angular.module('ngPlaces', [])
    .factory('places', function () {
      var service = new google.maps.places.PlacesService(document.createElement('div'));

      return {
        getDetails,
        findPlaceFromQuery
      }

      function getDetails(placeId, fields) {
        var request = {
          placeId,
          fields
        };
        var OK = google.maps.places.PlacesServiceStatus.OK;

        return new  Promise(function (resolve, reject) {
          service.getDetails(request, function (result, status) {
            if (status === OK) {
              return resolve(result);
            }
            reject(result);
          });
        });
      }

      function findPlaceFromQuery(query, fields) {
        var request = {
          query,
          fields
        }
        return new Promise(function (resolve, reject) {
          service.findPlaceFromQuery(request, function (result, status) {
            if (status === OK) {
              return resolve(result);
            }
            reject(result);
          });
        });
      }
    });

})();

(function(){
  angular.module('app')
    .controller('MoreInfoController', function(places, $timeout, LocationFactory){
      var $ctrl = this;
      var fields = ['formatted_address', 'name', 'rating', 'opening_hours', 'formatted_phone_number', "geometry"]
      var message = ("Sorry, you have to be at the brewery to check in")
      var distance;
      $ctrl.$onInit = function(){
        LocationFactory.getCoordinates().then(function(coordinates){
          places.getDetails($ctrl.placeId, fields)
          .then(function(result){
            $timeout(function(){
              $ctrl.hours = result.opening_hours.weekday_text;
              $ctrl.address = result.formatted_address;
              $ctrl.phone = result.formatted_phone_number;
              $ctrl.name = result.name;
              $ctrl.rating = result.rating;
              var location = result.geometry.location;
              distance = google.maps.geometry.spherical.computeDistanceBetween(location, new google.maps.LatLng(coordinates.lat, coordinates.lng))
            });
        });
        });

      };


      // $ctrl.form.hide();
      //
      // $ctrl.fadeIn(500);
      // form.show(quickCheckin);

      $ctrl.checkin = function(){
        console.log(distance);
        if (distance <= 100) {
          $ctrl.onCheckin();
        }
        else($ctrl.message=message);
      }
    })
})();

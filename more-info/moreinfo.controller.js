(function(){
  angular.module('app')
    .controller('MoreInfoController', function(places, $timeout){
      var $ctrl = this;
      var fields = ['formatted_address', 'name', 'rating', 'opening_hours', 'formatted_phone_number', "geometry"]

      $ctrl.$onInit = function(){

        places.getDetails($ctrl.placeId, fields)
        .then(function(result){
          $timeout(function(){
            $ctrl.hours = result.opening_hours.weekday_text;
            $ctrl.address = result.formatted_address;
            $ctrl.phone = result.formatted_phone_number;
            $ctrl.name = result.name;
            $ctrl.rating = result.rating;
      
          });


          // console.log(result);
        });

      };


      // $ctrl.form.hide();
      //
      // $ctrl.fadeIn(500);
      // form.show(quickCheckin);

      $ctrl.checkin = function(){
        $ctrl.onCheckin();
      }
    })
})();

(function(){
  angular.module('app')
    .controller('MainPageController', function(DataFactory){
      var $ctrl = this;
        $ctrl.breweries = DataFactory.getData();
        $ctrl.completed = numberCheckedIn();
        
        $ctrl.onCheckin = function(){
          // check in the correct icon
          // save in data factory
          $ctrl.current.checkedIn = true;
          // reset current
          $ctrl.current = {};
          //hide quick check in
          $ctrl.showQuickCheckin = false;
          $ctrl.completed = numberCheckedIn();
        }
        
        $ctrl.close= function(){
          $ctrl.showQuickCheckin=false;
        }
 
        $ctrl.quickCheckin = function(brewery){
          if(!brewery.checkedIn) {
            $ctrl.current = brewery;
            $ctrl.showQuickCheckin = true;
          }
 
      }
 
      function numberCheckedIn () {
        return $ctrl.breweries.filter(function(brewery){
          return brewery.checkedIn;
        }).length
      }
    })
 })();



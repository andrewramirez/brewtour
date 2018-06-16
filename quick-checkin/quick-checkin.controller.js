(function(){
  angular.module('app')
    .controller('QuickCheckinController', function(){
      var $ctrl = this;

      

      $ctrl.checkin = function(){
        $ctrl.onCheckin();
      }
    })
})();

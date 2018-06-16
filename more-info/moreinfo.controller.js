(function(){
  angular.module('app')
    .controller('MoreInfoController', function(){
      var $ctrl = this;

      // $ctrl.form.hide();
      //
      // $ctrl.fadeIn(500);
      // form.show(quickCheckin);

      $ctrl.checkin = function(){
        $ctrl.onCheckin();
      }
    })
})();

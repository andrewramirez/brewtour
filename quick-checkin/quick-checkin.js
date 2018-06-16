(function() {
  angular.module('app')
    .component('quickCheckin', {
      templateUrl: 'quick-checkin/quick-checkin.html',
      controller: 'QuickCheckinController',
      bindings: {
        onCheckin: '<'
      }


    });
})();

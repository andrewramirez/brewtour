(function() {
  angular.module('app')
    .component('moreInfo', {
      templateUrl: 'more-info/moreinfo.html',
      controller: 'MoreInfoController',
      bindings: {
        onCheckin: '<',
        placeId: '<'
      }


    });
})();

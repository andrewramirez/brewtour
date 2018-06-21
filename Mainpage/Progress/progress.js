(function() {
  angular.module('app')
    .component('quickCheckin', {
      templateUrl: 'mainpage/progress/progress.html',
      controller: 'ProgressController',
      bindings: {
        onCheckin: '<'
      }
      
})();

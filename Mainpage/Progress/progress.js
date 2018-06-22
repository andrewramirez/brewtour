(function() {
  angular.module('app')
    .component('progressBar', {
      templateUrl: 'mainpage/progress/progress.html',
      bindings: {
        completed: '<'
      }
    });
      
 })();
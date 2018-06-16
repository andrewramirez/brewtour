(function() {
   angular.module ('app', ['ngRoute'])
   .config(function($routeProvider){
       $routeProvider
       .when('/', {
           template: '<about-page></about-page>'
       })
       .when('/app',{
           template: '<main-page></main-page>'
       })
       .when('/app/more-info',{
          template: '<more-info></more-info>'
       })
       .otherwise({
           template: '<h1>That page does not exist</h1>'
       })
   });
})();

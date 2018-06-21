(function() {
  angular.module('app')
    .factory('DataFactory', function() {
      var currentBrewery;
      var breweries = [{
          name: 'Brew Detroit',
          id: 'ChIJBykjvkYtO4gRvk7pFr5GN84',
          src: 'pictures/beer-tour-logos/brew-detroit-logo.png',
          checkedIn: false
        },
        {
          name: 'Detroit Beer Co.',
          id: 'ChIJpdYNJjItO4gR6hdO4tnn79c',
          src: 'pictures/beer-tour-logos/detroitbeerco.png',
          checkedIn: false
        },
        {
          name: 'Eastern Market Brewing Co',
          id: 'ChIJlfjaV9bSJIgRWMXRTvAaVCE',
          src: 'pictures/beer-tour-logos/easternmarketbeer.png',
          checkedIn: false
        },
        {
          name: 'Motor City Brewing Works',
          id: 'ChIJTQ3ghrrSJIgRZpsH2YS97zM',
          src: 'pictures/beer-tour-logos/motorcitybeer.png',
          checkedIn: false
        }
      ];

      return {
        setCurrent: function(data) {
          currentBrewery = data;
        },

        getData: function() {
          return breweries;
        },

        getCurrent: function(){
          return currentBrewery;
        }
      }


    });
})();

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
          src: 'pictures/beer-tour-logos/MCBW-since-1994.png',
          checkedIn: false
        },
        {
          name: 'Atwater Brewery & Tap House',
          id: 'ChIJX7qSFMssO4gR50sQTBiN40E',
          src: 'pictures/beer-tour-logos/Atwater_Logo_Small.png',
          checkedIn: false
        },
        {
          name: 'Batch Brewing Company',
          id: 'ChIJj4k6iE8tO4gRgL1jtCw72ns',
          src: 'pictures/beer-tour-logos/batch-logo-flat-large.png',
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

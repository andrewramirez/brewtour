(function() {
  angular.module('app')
    .factory('DataFactory', function() {
      var breweries = [{
          name: 'Brew Detroit',
          id: '1',
          src: 'pictures/beer-tour-logos/brew-detroit-logo.png',
          checkedIn: false
        },
        {
          name: 'Detroit Beer Co.',
          id: '2',
          src: 'pictures/beer-tour-logos/detroitbeerco.png',
          checkedIn: false
        },
        {
          name: 'Eastern Market Brewing Co',
          id: '3',
          src: 'pictures/beer-tour-logos/easternmarketbeer.png',
          checkedIn: false
        },
        {
          name: 'Motor City Brewing Works',
          id: '4',
          src: 'pictures/beer-tour-logos/motorcitybeer.png',
          checkedIn: false
        }
      ];

      return {
        setData: function(data) {
          breweries = data;
        },

        getData: function() {
          return breweries;
        }
      }


    });
})();

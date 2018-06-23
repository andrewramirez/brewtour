(function() {
  angular.module('app')
    .factory('DataFactory', function() {
      var currentBrewery;
      var breweries = [{
          name: 'Brew Detroit',
          id: 'ChIJBykjvkYtO4gRvk7pFr5GN84',
          src: 'pictures/beer-tour-logos/brew_detroit_logo.png',
          description: "Located in the historic Corktown District of Detroit, Michigan, Brew Detroit operates in a 68,000 square foot facility.",
          notableBeers: "Beast Juice, Daywalker & Quadratical",
          yearEstablished: "2012",
          checkedIn: false
          
        },
        {
          name: 'Detroit Beer Co.',
          id: 'ChIJpdYNJjItO4gR6hdO4tnn79c',
          src: 'pictures/beer-tour-logos/detroitbeerco.png',
          description: "Detroit Beer Co. occupies the first two floors of the historic Hartz Building on Broadway in Downtown Detroit just steps from Comerica Park, Ford Field and the Detroit Opera House making it a great spot for pre & post event dining and drinks. The historic setting, combined with state-of-the-art brewing technology and 21st century finishes provides a unique dining experience. Seating is available on both floors and can be reserved for special events.",
          notableBeers: "Detroit Dwarf (Altbier) & Local 1529 IPA (IPA - American)",
          yearEstablished: "2003",
          checkedIn: false
        },
        {
          name: 'Eastern Market Brewing Co',
          id: 'ChIJlfjaV9bSJIgRWMXRTvAaVCE',
          src: 'pictures/beer-tour-logos/easternmarketbeer.png',
          description: "The idea for EMBC came about as most great ideas do – on a porch, in lawn chairs, drinking beer. One of our founders, Dayne, had recently moved back to Michigan after living in England and bought a farm in the country. The three buddies who would eventually found EMBC were sitting on the back porch, discussing what they could possibly do with the beautifully finished barn that sat empty on his property. The idea? Start a brewery, of course! This microbrewery would be their side hustle. Something fun to do together.",
          notableBeers: "Dubbel Trouble & Detroit is the New Black IPA",
          yearEstablished: "2016",
          checkedIn: false
        },
        {
          name: 'Motor City Brewing Works',
          id: 'ChIJTQ3ghrrSJIgRZpsH2YS97zM',
          src: 'pictures/beer-tour-logos/MCBW-since-1994.png',
          description: "Motor City Brewing Works has been committed to producing hand-crafted superior quality beer. We hope you enjoy the labors of Detroit's Oldest operating Brewery, as we contribute to the genuinely original exports of Detroit’s Cultural Center. A century of art, literature, music & now Beer!",
          notableBeers: "Bohemian Lager & Motor City Pale Ale",
          yearEstablished: "1994",
          checkedIn: false
        },
        {
          name: 'Atwater Brewery & Tap House',
          id: 'ChIJX7qSFMssO4gR50sQTBiN40E',
          src: 'pictures/beer-tour-logos/Atwater_Logo_Small.png',
          description: "Atwater Block Brewery made its debut in Detroit, Michigan in the historic Rivertown district. The original owner’s reasoning and focus was to bring back the Bohemian style lager that Stroh’s Brewing Company had made famous in the mid 1800’s. The passion for beer started in 1848 when the first mass produced beer was bottled in the Detroit area. So although Detroit is known for being the Motor city, at one time Michigan had more production breweries than anyone in the country. Atwater wanted to re-invent that product back in 1997 of making German style Lagers. The owners purchased a Kasper Schulz, the oldest makers of brewing equipment in the world! It was purchased at a trade show in 1996 and by 1997 Atwater was producing beer!",
          notableBeers: "Dirty Blonde & Vanilla Java Porter",
          yearEstablished: "1997",
          checkedIn: false
        },
        {
          name: 'Batch Brewing Company',
          id: 'ChIJj4k6iE8tO4gRgL1jtCw72ns',
          src: 'pictures/beer-tour-logos/batch-logo-flat-large.png',
          description: "Co-owners of Batch Brewing Company, stephen and jason are a couple of cats that have known each other for years. they left corporate careers to start this little brewery, where they spend basically all of their time. it makes the day easier when you get to work with people you actually like, you know?",
          notableBeers: "Scurrilous IPA & Blood In, Orange Out",
          yearEstablished: "2013",
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

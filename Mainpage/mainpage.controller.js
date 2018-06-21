(function(){
  angular.module('app')
    .controller('MainPageController', function(DataFactory){
      var $ctrl = this;
        $ctrl.breweries = DataFactory.getData();
        $ctrl.onCheckin = function(){
          // check in the correct icon
          // save in data factory
          $ctrl.current.checkedIn = true;
          // reset current
          $ctrl.current = {};
          //hide quick check in
          $ctrl.showQuickCheckin = false;
        }
        $ctrl.quickCheckin = function(brewery){
          if(!brewery.checkedIn) {
            $ctrl.current = brewery;
            $ctrl.showQuickCheckin = true;
          }

      }


      // $ctrl.breweries = [
      //   {
      //     name: 'Brew Detroit',
      //     id: '1',
      //     src: 'pictures/beer-tour-logos/brew-detroit-logo.png',
      //     checkedIn: false
      //   },
      //   {
      //     name: 'Detroit Beer Co.',
      //     id: '2',
      //     src: 'pictures/beer-tour-logos/detroitbeerco.png',
      //     checkedIn: false
      //   },
      //   {
      //     name: 'Eastern Market Brewing Co',
      //     id: '3',
      //     src: 'pictures/beer-tour-logos/easternmarketbeer.png',
      //     checkedIn: false
      //   },
      //   {
      //     name: 'Motor City Brewing Works',
      //     id: '4',
      //     src: 'pictures/beer-tour-logos/motorcitybeer.png',
      //     checkedIn: false
      //   }
      // ]
    })
})();

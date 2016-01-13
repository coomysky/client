(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('NavbarCtrl', NavbarCtrl);

  NavbarCtrl.$inject = ['logger', 'ngDialog', 'HouseService', '$scope',
    '$rootScope', 'PROJECTS_EVENTS', '$state', 
    '$stateParams', 'Projects'
  ];
  /* @ngInject */
  function NavbarCtrl(logger, ngDialog, HouseService, $scope, $rootScope,
    PROJECTS_EVENTS, $state, $stateParams, Projects) {

      Projects.get({
        id: $stateParams.id
      }).$promise.then(function(res) {
         if (res.project_floors.length > 1) {
          $scope.getShowHouseBtnEven = true;
        }
      });


    $scope.home = home;

    function home() {
      $state.go('home');
    }


    $scope.sendOpenHouseEven = sendOpenHouseEven;

    function sendOpenHouseEven() {
      $rootScope.$broadcast(PROJECTS_EVENTS.openHouseDatas);
    }

    activate();

    function activate() {
      logger.log('Activate Load Navbar View', $scope);
    }


  }

})();

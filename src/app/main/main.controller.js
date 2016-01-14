(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainController', MainController);

  // MainController.$inject = ['config', 'logger'];
  /* @ngInject */
  function MainController(config, logger, $state, $rootScope, $timeout) {
    var vm = this;
    vm.fininshLandingAnimate = false;

    $timeout(function() {
      vm.fininshLandingAnimate = true;
    }, 2000);



  }

})();

(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('ShellController', ShellController);

  ShellController.$inject = ['$timeout', 'logger', 'config'];
  /* @ngInject */
  function ShellController($timeout, logger, config) {
    var vm = this;
    vm.showSplash = true;
    vm.appTitle = config.appTitle;

    activate();

    function activate() {
      logger.info(' Welocom ' + config.appTitle, null);
      // hideSplash();
    }

    function hideSplash() {
      //Force a 1 second delay so we can see the splash.
      $timeout(function() {
        vm.showSplash = false;
      }, 1000);
    }
  }
})();

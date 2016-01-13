(function() {
  'use strict';

  angular.module('gdc.project', ['app.core', 'app.main']).run(appRun);

  appRun.$inject = ['$rootScope', 'PROJECTS_EVENTS'];

  /* @ngInject */
  function appRun($rootScope, PROJECTS_EVENTS) {

  }

})();

(function() {

  'use strict';

  angular
    .module('app.main')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'home',
      config: {
        url: '/',
        data: {
          requiresLogin: false
        },
        views: {
          '': {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'vm'
          }
        },
        resolve: {

          /* @ngInject */
          recommends: function($q, logger, Projects) {
            var deferred = $q.defer();
            Projects.recommends(function(data) {
              deferred.resolve(data.projects);
            }, function(response) {
              deferred.reject(response);
            });
            return deferred.promise;
          },
          /* @ngInject */
          globalConfig: function($q, logger, ConfigService) {
            var deferred = $q.defer();
            ConfigService.config(function(data) {
              deferred.resolve(data);
            }, function(response) {
              deferred.reject(response);
            });
            return deferred.promise;
          },
        }
      }
    }];
  }
})();
(function() {
  'use strict';

  angular
    .module('gdc.project')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'projects',
      abstract: true,
      config: {
        url: '/projects',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsController',
        controllerAs: 'vm',
        resolve: {
          /* @ngInject */
          globalConfig: function($q, logger, ConfigService) {
            var deferred = $q.defer();
            ConfigService.config(function(data) {
              deferred.resolve(data);
            }, function(response) {
              deferred.reject(response);
            });
            return deferred.promise;
          }
        }
      }
    }, {
      state: 'projects.show',
      config: {
        url: '/:id',
        resolve: {
          /* @ngInject */
          project: function($q, $stateParams, logger, Projects) {
            var deferred = $q.defer();
            Projects.get({
              id: $stateParams.id
            }, function(data) {
              deferred.resolve(data);
            }, function(response) {
              deferred.reject(response);
            });
            return deferred.promise;
          }
        },
        views: {
          '': {
            templateUrl: 'app/projects/projects.show.html',
            controller: 'ProjectsShowController',
            controllerAs: 'vm'
          }
        }
      }
    }, {
      state: 'projects.certificate',
      config: {
        url: '/:id/certificate',
        templateUrl: 'app/projects/projects.certificate.html',
        controller: 'ProjectsCertificateController',
        controllerAs: 'vm'
      }
    }];
  }

})();

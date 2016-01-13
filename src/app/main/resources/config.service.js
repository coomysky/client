(function() {

  'use strict';

  angular
    .module('app.main')
    .factory('ConfigService', ConfigService);

  ConfigService.$inject = ['$resource', 'logger', 'config'];

  /* @ngInject */
  function ConfigService($resource, logger, config) {
    return $resource(config.apiUrl + '/api/v1/frontend/:id.:format', {
      id: '@id',
      format: 'json'
    }, {
        update: {
          method: 'PATCH'
        },
        config: {
          url: config.apiUrl + '/api/v1/frontend/settings/gdc.:format',
          method: 'GET',
          isArray: false
        }
      } 
    );
  }
})();
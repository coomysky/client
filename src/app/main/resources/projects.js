(function() {

  'use strict';

  angular
    .module('app.main')
    .factory('Projects', Projects);

  Projects.$inject = ['$resource', 'logger', 'config'];

  /* @ngInject */
  function Projects($resource, logger, config) {
    return $resource(config.apiUrl + '/api/v1/frontend/projects/:id.:format', {
      id: '@id',
      format: 'json'
    }, {
        update: {
          method: 'PATCH',
        },
        recommends: {
          url: config.apiUrl + '/api/v1/frontend/projects/recommends.:format',
          method: 'GET'
        },
      }
    );
  }
})();

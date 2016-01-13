(function() {
  'use strict';

  angular
    .module('app.main')
    .directive('gdcSearch', gdcSearch);

  gdcSearch.$inject = [];
  /* @ngInject */
  function gdcSearch() {
    var directive = {
      replace: true,
      retrict: 'AE',
      templateUrl: 'app/main/directives/gdc-search.html',
      transclude: true,
      scope:{
        projects:'=',
        onClose:'&',
        itemClick:'&'
      },
      link: link
    };

    return directive;

    function link(scope, elem, attrs){
      scope.close = close;
      scope.go = go;
      function go(id,name) {
        scope.itemClick({id:id,name:name});
      }
      function close() {
        scope.onClose();
      }
    }
  }
})();

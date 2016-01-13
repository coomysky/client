(function() {
  'use strict';

  var m = angular
    .module('gdc.project')
    .controller('ProjectsCertificateController',
      ProjectsCertificateController);


  ProjectsCertificateController.$inject = ['logger', 'config', '$window',
    '$scope'
  ];

  /* @ngInject */
  function ProjectsCertificateController(logger, config, $window, $scope) {
    var vm = this;
    vm.appTitle = config.appTitle;

    activate();


    function activate() {
    }


  }

})();

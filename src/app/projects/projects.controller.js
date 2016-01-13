(function() {
  'use strict';

  var m = angular
    .module('gdc.project')
    .controller('ProjectsController',
      ProjectsController);


  ProjectsController.$inject = ['logger', 'config', '$window',
    '$scope', '$rootScope', '$timeout', 'globalConfig'
  ];

  /* @ngInject */
  function ProjectsController(logger, config, $window, $scope, $rootScope,
    $timeout, globalConfig) {
    var vm = this;
    vm.globalConfig = globalConfig;
    vm.fadeInHouse = 'fadeIn';
    $rootScope.$on('fade-in-house-datas', function(e) {
      vm.fadeInHouse = 'hide';
      $timeout(function() {
        vm.fadeInHouse = 'fadeIn';
      }, 300);
    });

    activate();


    function activate() {

    }


  }

})();

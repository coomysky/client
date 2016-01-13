(function() {
  'use strict';

  var m = angular
    .module('gdc.project')
    .controller('ProjectsShowController', ProjectsShowController);


  ProjectsShowController.$inject = ['logger', 'config', '$window', '$scope',
    'ngDialog', 'HouseService', 'PROJECTS_EVENTS', '$rootScope',
    '$stateParams', 'project'
  ];

  /* @ngInject */
  function ProjectsShowController(logger, config, $window, $scope, ngDialog,
    HouseService, PROJECTS_EVENTS, $rootScope, $stateParams, project) {
    var vm = this;
    $scope.isNext = 'next';
    vm.config = config;
    vm.appTitle = config.appTitle;
    vm.dropOpen = false;
    vm.width = getScreenSize();
    vm.open = open;
    vm.openCertificate = openCertificate;
    vm.isCurrentSlideIndex = isCurrentSlideIndex;
    vm.prevSlide = prevSlide;
    vm.nextSlide = nextSlide;
    vm.dropOpen = true;
    vm.currentIndex = 0;
    vm.isNext = isNext;
    vm.openHouse = openHouse;
    vm.getHouse = getHouse;
    vm.project = project;
    vm.sliders = vm.project.project_images;
    vm.houseData = '';
    vm.portCertificate = [];
    vm.siteCertificate = [];

    $(window).resize(function() {
      vm.width = getScreenSize();
      $scope.$apply(function() {
        init();
      });
    });

    $rootScope.$on('open-house-datas', function(e) {
      openHouse();
    });

    activate();

    function openHouse() {

      ngDialog.open({
        template: 'app/projects/popHouse.html',
        controller: ['$scope', function($scope) {
          $scope.datas = vm.project.project_floors;
          $scope.floor = vm.houseData.floor_name;
          $scope.getHouse = function(index) {
            if (vm.reload) {
              $rootScope.$broadcast(PROJECTS_EVENTS.fadeOutHouseDatas);
            }
            getHouse(index);
            ngDialog.close();
            if (vm.reload) {
              $rootScope.$broadcast(PROJECTS_EVENTS.fadeInHouseDatas);
            }
          };
        }]
      });
    }

    function getHouse(floor) {
      vm.houseData = vm.project.project_floors[floor];
      getCirtificateDatas();
    }

    function isNext(index) {
      if (!isCurrentSlideIndex(index)) {
        return 'hide';
      } else {
        return $scope.isNext;
      }
    }

    function getCirtificateDatas() {
      if (!vm.houseData.stations) {
        vm.portCertificate = [];
        vm.siteCertificate = [];
        return;
      }
      _.forEach(vm.houseData.stations.arrival_ports, function(info) {
        _.forEach(info.inspections, function(obj) {
          _.forEach(obj.certificates, function(cirtificate) {
            var data = {
              url: vm.config.assetsUrl +
                cirtificate.url,
              type: cirtificate.content_type
            };
            vm.portCertificate.push(data);
          });
        });
      });

      _.forEach([vm.houseData.stations.site], function(info) {
        _.forEach(info.inspections, function(obj) {
          _.forEach(obj.certificates, function(cirtificate) {
            var data = {
              url: vm.config.assetsUrl +
                cirtificate.url,
              type: cirtificate.content_type
            };
            vm.siteCertificate.push(data);
          });
        });
      });
    }

    function isCurrentSlideIndex(index) {
      return vm.currentIndex === index;
    }

    function prevSlide() {
      $scope.isNext = 'prev';
      vm.currentIndex = (vm.currentIndex < vm.sliders.length - 1) ? ++vm.currentIndex :
        0;
    }

    function nextSlide() {
      $scope.isNext = 'next';
      vm.currentIndex = (vm.currentIndex > 0) ? --vm.currentIndex : vm.sliders
        .length - 1;
    }

    function openCertificate(data) {
      ngDialog.open({
        template: 'app/projects/popCertificate.html',
        controller: ['$scope', function($scope) {
          $scope.currentIndex = 0;
          $scope.animateStyle = 'next';
          $scope.display = vm.display;
          $scope.datas = data;
          $scope.isNext = function(index) {
            if ($scope.currentIndex !== index) {
              return 'hide';
            } else {
              return $scope.animateStyle;
            }
          };
          $scope.prev = function() {
            $scope.animateStyle = 'prev';
            $scope.currentIndex = ($scope.currentIndex < $scope.datas
              .length - 1) ? ++$scope.currentIndex : 0;
          };
          $scope.next = function() {
            $scope.animateStyle = 'next';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --
              $scope.currentIndex : $scope.datas.length - 1;
          };
        }]
      });
    }

    function init() {
      getHouse(0);
      if (vm.width > 992) {
        vm.dropOpen = true;
        vm.display = 'block';
        // vm.sliders = vm.pageDatas.pcSlides;
        vm.reload = false;

      } else {
        vm.dropOpen = false;
        vm.display = 'none';
        // vm.sliders = vm.pageDatas.mbSlides;
        vm.reload = true;
      }
    }

    function open() {
      if (vm.width > 992) {
        return;
      } else {
        vm.dropOpen = !vm.dropOpen;
      }
    }

    function activate() {
      init();
    }

    function getScreenSize() {
      return $window.innerWidth;
    }

  }

})();

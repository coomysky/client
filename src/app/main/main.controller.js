(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainController', MainController);

  // MainController.$inject = ['config', 'logger'];
  /* @ngInject */
  function MainController(config, logger, $state, md5, recommends, Projects, globalConfig) {
    var vm = this;
    vm.config = config;
    vm.appTitle = config.appTitle;
    vm.go = go;
    vm.recommends = recommends;
    vm.search = search;
    vm.searchData = '';
    vm.projects = '';
    vm.closeSearch = closeSearch;
    vm.projectImage = projectImage;
    vm.globalConfig = globalConfig;
    vm.down = down;

    function down(){
    }


    function closeSearch(){
      vm.projects ='';
    }

    activate();
    vm.slider = [{
      label: '台南南科 台積電6場',
      img: ''
    }, {
      label: '台灣高鐵',
      img: ''
    }, {
      label: '台北轉運站',
      img: ''
    }];

    vm.slickConfigLoaded = true;
    vm.updateSlider = function() {
      vm.slickConfigLoaded = false;
      vm.slider.push(Math.floor((Math.random() * 10) + 100));
      $timeout(function() {
        vm.slickConfigLoaded = true;
      });
    };

    vm.slickConfig = {
      autoplay: true,
      infinite: true,
      autoplaySpeed: 5000,
      slidesToShow: 3,
      slidesToScroll: 3,
      method: {}
    };

    function search(){
      if(!vm.searchData){
        return;
      }
      console.log(vm.searchData);
      Projects.get({
        search:vm.searchData
      }).$promise.then(function(res) {
        vm.projects = res.projects;
        console.log(vm.projects);
      });
      // vm.projects = [{
      //   name:'test',
      //   img:'assets/images/projects/demo3/slide2.jpg',
      //   id:'1231'
      // },{
      //   name:'test2',
      //   img:'assets/images/projects/demo3/slide1.jpg',
      //   id:'1231'
      // }];

    }

    function go(data) {
      $state.go('projects.show', data);
    }

    function activate() {
      // logger.log('Activated Main View');
    }

    function projectImage(project) {
      var image_url = '';
      if (project.project_images.length > 0) {
        image_url = vm.config.assetsUrl + project.project_images[0];
      }

      return image_url;
    }


  }

})();

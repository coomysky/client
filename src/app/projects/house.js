(function() {
  'use strict';



  angular.module('gdc.project')
    .factory('HouseService', HouseService);

  HouseService.$inject = ['$stateParams'];

  function HouseService($stateParams) {
    var service = {
      getSlider: getSlider,
      getHouse: getHouse,
      getHouseDatas: getHouseDatas
    };

    return service;

    function getSlider() {
      var datas = {};
      switch ($stateParams.id) {
        case '446899a5f4d579f98afecab56ed9de9f':
          datas = {
            pcSlides: [{
              img: 'assets/images/projects/demo3/slide1.jpg'
            }, {
              img: 'assets/images/projects/demo3/slide3.jpg'
            }, {
              img: 'assets/images/projects/demo3/slide2.jpg'
            }],
            mbSlides: [{
              img: 'assets/images/projects/demo3/slide1.jpg'
            }, {
              img: 'assets/images/projects/demo3/slide3.jpg'
            }, {
              img: 'assets/images/projects/demo3/slide2.jpg'
            }],
            title: '中華電信板橋資料中心',
            description: '位於板橋的全新雲端資料中心將提供國際級高規格、高品質、高安全服務，為國內外企業提供孕育雲端服務的最佳環境。',
          };
          break;
        case '40c301509ceb76aa339fe29191791203':
          datas = {
            pcSlides: [{
              img: 'assets/images/projects/demo2/slide3.jpg'
            }, {
              img: 'assets/images/projects/demo2/slide1.jpg'
            }, {
              img: 'assets/images/projects/demo2/slide2.jpg'
            }],
            mbSlides: [{
              img: 'assets/images/projects/demo2/slide3.jpg'
            }, {
              img: 'assets/images/projects/demo2/slide1.jpg'
            }, {
              img: 'assets/images/projects/demo2/slide2.jpg'
            }],
            title: '潤泰新莊副都心案',
            description: '副都心重劃區是目前話題最多、建設最大、 ... 潤泰創新、麗寶都看好此區未來發展的條件及潛力，年度推案量始終名列前茅',
          };
          break;
        case 'df85cb83ae4a03d866f43eea2a22b703':
          datas = {
            pcSlides: [{
              img: 'assets/images/projects/demo1/slide2.jpg'
            }, {
              img: 'assets/images/projects/demo1/slide1.jpg'
            }, {
              img: 'assets/images/projects/demo1/slide3.jpg'
            }],
            mbSlides: [{
              img: 'assets/images/projects/demo1/slide2.jpg'
            }, {
              img: 'assets/images/projects/demo1/slide1.jpg'
            }, {
              img: 'assets/images/projects/demo1/slide3.jpg'
            }],
            title: '華固新綠洲住宅大樓',
            description: '新綠洲社區基本資料案址土城區海山捷運300公尺投資興建華固建設基地位置土城區學成路坪數規劃29~54坪規劃戶數364戶* 新綠洲* 數戶超值精選',
          };
          break;
        default:
          datas = {
            pcSlides: [{
              img: 'assets/images/demo/project.jpg'
            }, {
              img: 'assets/images/demo/site-photo-default.png'
            }, {
              img: 'assets/images/demo/demo2.jpg'
            }, {
              img: 'assets/images/demo/demo3.jpg'
            }],
            mbSlides: [{
              img: 'assets/images/projects/mobile/home-banner.png'
            }, {
              img: 'assets/images/demo/site-photo-default.png'
            }, {
              img: 'assets/images/demo/demo2.jpg'
            }, {
              img: 'assets/images/demo/demo3.jpg'
            }],
            title: '廣宇晴朗案',
            description: '永和珍稀小坪數，跟爸媽住近一點！由專精打造幸福建築的廣宇建設重金禮聘大陸工程責任施工，加上瑞士SGS 集團全工程國際等級的七大檢驗品質專業把關，完美呈現《廣宇晴朗》。攜手台灣名宅界頂級團隊–築內國際，從裡到外完整規劃公設空間，期許給您最細緻的生活體驗；享受大安區的優質生活，只需負擔大安區的一半價錢。住過永和的人才會知道永和的好！',
          };
      }
      return datas;
    }

    function getHouse(floor) {
      var datas = service.getHouseDatas();
      return datas[floor];
    }

    function getHouseDatas() {
      var datas = [];
      switch ($stateParams.id) {
        case '446899a5f4d579f98afecab56ed9de9f':
          datas = [{
            name: '9樓',
            portCritificate: [{
              img: 'assets/images/projects/demo3/port/9/min/01.png'
            }, {
              img: 'assets/images/projects/demo3/port/9/min/02.png'
            }],
            siteCritificate: [{
              img: 'assets/images/projects/demo3/site/9/min/01.png'
            }, {
              img: 'assets/images/projects/demo3/site/9/min/02.png'
            }, {
              img: 'assets/images/projects/demo3/site/9/min/03.png'
            }, {
              img: 'assets/images/projects/demo3/site/9/min/04.png'
            }, {
              img: 'assets/images/projects/demo3/site/9/min/05.png'
            }, {
              img: 'assets/images/projects/demo3/site/9/min/06.png'
            }, {
              img: 'assets/images/projects/demo3/site/9/min/07.png'
            }, {
              img: 'assets/images/projects/demo3/site/9/min/08.png'
            }, {
              img: 'assets/images/projects/demo3/site/9/min/14.png'
            }, {
              img: 'assets/images/projects/demo3/site/9/min/10.png'
            }, {
              img: 'assets/images/projects/demo3/site/9/min/11.png'
            }, {
              img: 'assets/images/projects/demo3/site/9/min/12.png'
            }, {
              img: 'assets/images/projects/demo3/site/9/min/13.png'
            }],
            sevenDatas: {
              one: [{
                title: '南太武',
                dates: ['2014/12/26']
              }, {
                title: '廈門',
                dates: ['2014/12/30']
              }],
              two: [{
                title: '漳州港口',
                dates: ['2014/12/27']
              }, {
                title: '廈門',
                dates: ['2014/12/28']
              }],
              three: [{
                title: '台北港',
                dates: ['2014/12/29', '2015/01/01']
              }],
              four: [{
                title: '台北港堆場',
                dates: ['2015/01/01', '2015/01/06']
              }],
              fie: [{
                title: '土城國產',
                dates: ['2015/01/01', '2015/01/06']
              }],
              six: [{
                title: '土城國產',
                dates: ['2015/01/09']
              }],
              seven: [{
                title: '中華電信板橋資料中心新建工程',
                dates: ['2015/01/09']
              }]
            }
          }, {
            name: '屋頂',
            portCritificate: [{
              img: 'assets/images/projects/demo3/port/top/min/01.png'
            }],
            siteCritificate: [{
              img: 'assets/images/projects/demo3/site/top/min/01.png'
            }, {
              img: 'assets/images/projects/demo3/site/top/min/02.png'
            }, {
              img: 'assets/images/projects/demo3/site/top/min/03.png'
            }, {
              img: 'assets/images/projects/demo3/site/top/min/04.png'
            }, {
              img: 'assets/images/projects/demo3/site/top/min/05.png'
            }, {
              img: 'assets/images/projects/demo3/site/top/min/06.png'
            }, {
              img: 'assets/images/projects/demo3/site/top/min/07.png'
            }, {
              img: 'assets/images/projects/demo3/site/top/min/08.png'
            }, {
              img: 'assets/images/projects/demo3/site/top/min/09.png'
            }, {
              img: 'assets/images/projects/demo3/site/top/min/10.png'
            }, {
              img: 'assets/images/projects/demo3/site/top/min/11.png'
            }, {
              img: 'assets/images/projects/demo3/site/top/min/12.png'
            }, {
              img: 'assets/images/projects/demo3/site/top/min/13.png'
            }],
            sevenDatas: {
              one: [{
                title: '閔侯',
                dates: ['2014/12/25']
              }],
              two: [{
                title: '松門港口',
                dates: ['2014/12/26']
              }],
              three: [{
                title: '台北港',
                dates: ['2014/12/28']
              }],
              four: [{
                title: '台北港堆場',
                dates: ['2014/12/28']
              }],
              fie: [{
                title: '土城國產',
                dates: ['2014/12/28']
              }],
              six: [{
                title: '土城國產',
                dates: ['2015/01/01']
              }],
              seven: [{
                title: '中華電信板橋資料中心新建工程',
                dates: ['2015/01/01']
              }]
            }
          }];
          break;
        case '40c301509ceb76aa339fe29191791203':
          datas = [{
            name: '1樓',
            portCritificate: [{
              img: 'assets/images/projects/demo2/port/min/01.png'
            }, {
              img: 'assets/images/projects/demo2/port/min/02.png'
            }, {
              img: 'assets/images/projects/demo2/port/min/03.png'
            }, {
              img: 'assets/images/projects/demo2/port/min/04.jpg'
            }],
            siteCritificate: [{
              img: 'assets/images/projects/demo2/site/min/01.png'
            }, {
              img: 'assets/images/projects/demo2/site/min/02.png'
            }, {
              img: 'assets/images/projects/demo2/site/min/03.png'
            }, {
              img: 'assets/images/projects/demo2/site/min/04.png'
            }, {
              img: 'assets/images/projects/demo2/site/min/05.png'
            }, {
              img: 'assets/images/projects/demo2/site/min/06.png'
            }, {
              img: 'assets/images/projects/demo2/site/min/07.png'
            }, {
              img: 'assets/images/projects/demo2/site/min/08.png'
            }, {
              img: 'assets/images/projects/demo2/site/min/09.png'
            }, {
              img: 'assets/images/projects/demo2/site/min/10.png'
            }, {
              img: 'assets/images/projects/demo2/site/min/11.png'
            }, {
              img: 'assets/images/projects/demo2/site/min/12.png'
            }, {
              img: 'assets/images/projects/demo2/site/min/13.png'
            }, {
              img: 'assets/images/projects/demo2/site/min/14.png'
            }, {
              img: 'assets/images/projects/demo2/site/min/15.png'
            }, {
              img: 'assets/images/projects/demo2/site/min/16.png'
            }, {
              img: 'assets/images/projects/demo2/site/min/17.png'
            }, {
              img: 'assets/images/projects/demo2/site/min/18.png'
            }, {
              img: 'assets/images/projects/demo2/site/min/19.png'
            }, {
              img: 'assets/images/projects/demo2/site/min/20.png'
            }, {
              img: 'assets/images/projects/demo2/site/min/21.png'
            }],
            sevenDatas: {
              one: [{
                title: '南太武',
                dates: ['2015/07/25']
              }],
              two: [{
                title: '漳州港口',
                dates: ['2015/08/01']
              }],
              three: [{
                title: '台北港',
                dates: ['2015/08/15']
              }],
              four: [{
                title: '台北港堆場',
                dates: ['2015/08/15']
              }],
              fie: [{
                title: '土城國產',
                dates: ['2015/08/18']
              }],
              six: [{
                title: '土城國產',
                dates: ['2015/08/31']
              }],
              seven: [{
                title: '潤泰新莊副都心案',
                dates: ['2015/09/25']
              }]
            }
          }];
          break;
        case 'df85cb83ae4a03d866f43eea2a22b703':
          datas = [{
            name: '1樓',
            portCritificate: [{
              img: 'assets/images/projects/demo1/port/min/HS1535_1040805-1.png'
            }, {
              img: 'assets/images/projects/demo1/port/min/HS1535_1040916-1.png'
            }, {
              img: 'assets/images/projects/demo1/port/min/HS1535_1040919-1.png'
            }, {
              img: 'assets/images/projects/demo1/port/min/04.jpg'
            }],
            siteCritificate: [{
              img: 'assets/images/projects/demo1/site/min/01.png'
            }, {
              img: 'assets/images/projects/demo1/site/min/02.png'
            }, {
              img: 'assets/images/projects/demo1/site/min/03.png'
            }, {
              img: 'assets/images/projects/demo1/site/min/04.png'
            }, {
              img: 'assets/images/projects/demo1/site/min/05.png'
            }, {
              img: 'assets/images/projects/demo1/site/min/06.png'
            }, {
              img: 'assets/images/projects/demo1/site/min/07.png'
            }, {
              img: 'assets/images/projects/demo1/site/min/08.png'
            }, {
              img: 'assets/images/projects/demo1/site/min/09.png'
            }, {
              img: 'assets/images/projects/demo1/site/min/10.png'
            }, {
              img: 'assets/images/projects/demo1/site/min/11.png'
            }, {
              img: 'assets/images/projects/demo1/site/min/12.png'
            }, {
              img: 'assets/images/projects/demo1/site/min/13.png'
            }, {
              img: 'assets/images/projects/demo1/site/min/14.png'
            }, {
              img: 'assets/images/projects/demo1/site/min/15.png'
            }, {
              img: 'assets/images/projects/demo1/site/min/16.png'
            }, {
              img: 'assets/images/projects/demo1/site/min/17.png'
            }, {
              img: 'assets/images/projects/demo1/site/min/18.png'
            }],
            sevenDatas: {
              one: [{
                title: '南太武',
                dates: ['2015/07/27']
              }],
              two: [{
                title: '漳州港口',
                dates: ['2015/07/29']
              }],
              three: [{
                title: '台北港',
                dates: ['2015/08/15']
              }],
              four: [{
                title: '台北港堆場',
                dates: ['2015/08/15']
              }],
              fie: [{
                title: '土城國產',
                dates: ['2015/08/18']
              }],
              six: [{
                title: '土城國產',
                dates: ['2015/08/22', '2015/08/24']
              }],
              seven: [{
                title: '華固新綠洲住宅大樓新建工程',
                dates: ['2015/09/04', '2015/09/10']
              }]
            }
          }];
          break;
        default:
          datas = [{
            name: '1樓',
            portCritificate: [{
              img: 'assets/images/projects/default/1.jpg'
            }, {
              img: 'assets/images/projects/default/2.jpg'
            }],
            siteCritificate: [{
              img: 'assets/images/projects/default/2-1.jpg'
            }, {
              img: 'assets/images/projects/default/2-2.jpg'
            }, {
              img: 'assets/images/projects/default/2-3.jpg'
            }, {
              img: 'assets/images/projects/default/2-4.jpg'
            }, {
              img: 'assets/images/projects/default/2-5.jpg'
            }],
            sevenDatas: {
              one: [{
                title: '閔侯礦場',
                dates: ['2015/05/25']
              }],
              two: [{
                title: '松門港',
                dates: ['2015/05/25']
              }],
              three: [{
                title: '台北港',
                dates: ['2015/06/05', '2015/06/12']
              }],
              four: [{
                title: '台北粒料場',
                dates: ['2015/06/12']
              }],
              fie: [{
                title: '國產土城',
                dates: ['2015/06/12']
              }],
              six: [{
                title: '國產土城',
                dates: ['2015/08/24']
              }],
              seven: [{
                title: '廣宇晴朗案',
                dates: ['2015/08/24', '2015/08/27', '2015/09/12']
              }]
            }
          }];
      }

      return datas;
    }
  }

})();

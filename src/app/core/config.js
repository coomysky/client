(function () {
  'use strict';

  var core = angular.module('app.core');

  core.config(toastrConfig);

  toastrConfig.$inject = ['toastr'];
  /* @ngInject */
  function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
  }

  core.config(configure);

  configure.$inject = ['$logProvider', '$httpProvider', 'routerHelperProvider', 'exceptionHandlerProvider', 'jwtInterceptorProvider', 'laddaProvider', 'config'];
  /* @ngInject */
  function configure($logProvider, $httpProvider, routerHelperProvider, exceptionHandlerProvider, jwtInterceptorProvider, laddaProvider, config) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
    
    // $httpProvider.interceptors.push('authInterceptor');
    // $httpProvider.interceptors.push('jwtInterceptor');

    laddaProvider.setOption({
      style: 'zoom-out'
    });

    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({docTitle: config.appTitle + ': '});
    // /* @ngInject */
    // function jwtTakenGetter($http, jwtHelper, store, logger) {
    //   var token = store.get('jwt');
    //   if (token && jwtHelper.isTokenExpired(token)) {
    //     AuthService.refreshToken(token).then(function(res) {
    //       logger.log('auth refreshToken res:', res.data);
    //       store.set('jwt', res.data.token);
    //       return res.data.token;
    //     }, function(res) {
    //       //logger.error('failed refreshToken!!!!!');
    //     });
    //   } else {
    //     return token;
    //   }
    // }
  }

})();

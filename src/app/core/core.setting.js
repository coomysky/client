(function() {
  'use strict';

  angular.module('app.core')
    .constant('config', {
      appErrorPrefix: '[GDC Error] ',
      appTitle: 'Bridal Shops',
      locale: 'en_US',
      support: {
        email: 'servermis@zooti.com',
        subject: 'Zooti Support'
      },
      debugMode: true,
      tablePageCount: 50,
      bootstrapDateFormat: 'yyyy/mm/dd hh:ii:ss',
      bootstrapSDateFormat: 'yyyy/mm/dd hh:ii',
      dateFormat: 'yyyy/MM/dd hh:mm',
      assetsUrl: '//traceability.gdc.com.tw/resources',
      domain: '',
      apiUrl: '//www.bridalshops.com/mbl/formland/001/a/',
      // objUrl: '//traceability.gdc.com.tw/backend'
      // apiUrl: '',
      objUrl: '//traceability.gdc.com.tw/backend'
    });
}());

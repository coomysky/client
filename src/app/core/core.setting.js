(function() {
  'use strict';

  angular.module('app.core')
    .constant('config', {
      appErrorPrefix: '[GDC Error] ',
      appTitle: '國產安心建材履歷',
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
      apiUrl: '//traceability.gdc.com.tw/backend',
      // objUrl: '//traceability.gdc.com.tw/backend'
      // apiUrl: '',
      objUrl: '//traceability.gdc.com.tw/backend'
    });
}());

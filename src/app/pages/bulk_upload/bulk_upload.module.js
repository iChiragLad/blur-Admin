/**
 * @author c.lad
 * created on 08.03.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.bulk_upload', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('bulk_upload', {
          url: '/bulk_upload',
          templateUrl: 'app/pages/bulk_upload/bulk_upload.html',
          abstract: true,
          title: 'Bulk Upload',
          sidebarMeta: {
            icon: 'ion-paper-airplane',
            order: 20
          },
        })
        .state('bulk_upload.bulkCreate', {
          url: '/bulkCreate',
          templateUrl: 'app/pages/bulk_upload/BulkCreate/BulkCreate.html',
          controller: 'BulkCreatePageCtrl',
          title: 'Bulk Create',
          sidebarMeta: {
            order: 21,
          },
        })
        .state('bulk_upload.bulkUploadReport', {
          url: '/bulkUploadReport',
          templateUrl: 'app/pages/bulk_upload/BulkUploadReport/BulkUploadReport.html',
          controller: 'BulkUploadReportPageCtrl',
          title: 'Bulk Upload Report',
          sidebarMeta: {
            order: 22,
          },
        });
  }

})();
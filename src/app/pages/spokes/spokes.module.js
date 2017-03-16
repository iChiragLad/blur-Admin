/**
 * @author c.lad
 * created on 08.03.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.spokes', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('spokes', {
          url: '/spokes',
          templateUrl: 'app/pages/spokes/spokes.html',
          abstract: true,
          title: 'Spokes',
          sidebarMeta: {
            icon: 'ion-link',
            order: 50
          },
        })
        .state('spokes.lms', {
          url: '/lms',
          templateUrl: 'app/pages/spokes/LMS/LMS.html',
          controller: 'LMSPageCtrl',
          title: 'LMS Console',
          sidebarMeta: {
            order: 51,
          },
        })
        .state('spokes.cc', {
          url: '/cc',
          templateUrl: 'app/pages/spokes/ClientConnect/ClientConnect.html',
          controller: 'ClientConnectPageCtrl',
          title: 'CC Console',
          sidebarMeta: {
            order: 52,
          },
        });
  }

})();

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
          title: 'Spokes',
          sidebarMeta: {
            order: 900,
          },
        });
  }

})();

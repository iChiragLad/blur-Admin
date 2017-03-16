/**
 * @author c.lad
 * created on 08.03.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.search', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('search', {
          url: '/search',
          templateUrl: 'app/pages/search/search.html',
          controller: 'searchPageCtrl',
          title: 'Central Search',
          sidebarMeta: {
            icon: 'ion-search',
            order: 0
          },
        });
  }

})();

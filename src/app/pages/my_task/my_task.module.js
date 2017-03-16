/**
 * @author c.lad
 * created on 08.03.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.my_task', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('my_task', {
          url: '/my_task',
          templateUrl: 'app/pages/my_task/my_task.html',
          controller: 'my_taskPageCtrl',
          title: 'My Task',
          sidebarMeta: {
            icon: 'ion-flag',
            order: 30
          },
        });
  }

})();

/**
 * @author c.lad
 * created on 08.03.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.users', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('users', {
          url: '/users',
          templateUrl: 'app/pages/users/users.html',
          abstract: true,
          title: 'Users',
          sidebarMeta: {
            icon: 'ion-person',
            order: 40
          },
        })
        .state('users.pr', {
          url: '/pr',
          templateUrl: 'app/pages/users/PendingRegistration/PendingRegistration.html',
          controller: 'PendingRegistrationPageCtrl',
          title: 'Pending Registration',
          sidebarMeta: {
            order: 41,
          },
        })
        .state('users.pv', {
          url: '/pv',
          templateUrl: 'app/pages/users/PendingValidation/PendingValidation.html',
          controller: 'PendingValidationPageCtrl',
          title: 'Pending Validation',
          sidebarMeta: {
            order: 42,
          },
        })
        .state('users.dr', {
          url: '/dr',
          templateUrl: 'app/pages/users/DeletedRegistration/DeletedRegistration.html',
          controller: 'DeletedRegistrationPageCtrl',
          title: 'Deleted Registration',
          sidebarMeta: {
            order: 43,
          },
        })
        .state('users.cr', {
          url: '/cr',
          templateUrl: 'app/pages/users/CaseResolved/CaseResolved.html',
          controller: 'CaseResolvedPageCtrl',
          title: 'Case Resolved',
          sidebarMeta: {
            order: 44,
          },
        })
        .state('users.activity', {
          url: '/activity',
          templateUrl: 'app/pages/users/Activity/Activity.html',
          controller: 'ActivityPageCtrl',
          title: 'Activity',
          sidebarMeta: {
            order: 45,
          },
        });
  }

})();

/**
 * @author c.lad
 * created on 16.03.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.administration', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('administration', {
          url: '/administration',
          templateUrl: 'app/pages/administration/administration.html',
          abstract: true,
          title: 'Administration',
          sidebarMeta: {
            icon: 'ion-briefcase',
            order: 60
          },
        })
        .state('administration.audienceTypes', {
          url: '/audienceTypes',
          templateUrl: 'app/pages/administration/AudienceTypes/AudienceTypes.html',
          controller: 'AudienceTypesPageCtrl',
          title: 'Audience Types',
          sidebarMeta: {
            order: 65,
          },
        })
        .state('administration.deactivatedUsers', {
          url: '/deactivatedUsers',
          templateUrl: 'app/pages/administration/DeactivatedUsers/DeactivatedUsers.html',
          controller: 'DeactivatedUsersPageCtrl',
          title: 'Deactivated Users',
          sidebarMeta: {
            order: 63,
          },
        })
        .state('administration.deletedRegistration', {
          url: '/deletedRegistration',
          templateUrl: 'app/pages/administration/DeletedRegistration/DeletedRegistration.html',
          controller: 'DeletedRegistrationPageCtrl',
          title: 'Deleted Registration',
          sidebarMeta: {
            order: 64,
          },
        })
        .state('administration.groups', {
          url: '/groups',
          templateUrl: 'app/pages/administration/Groups/Groups.html',
          controller: 'GroupsPageCtrl',
          title: 'Groups',
          sidebarMeta: {
            order: 68,
          },
        })
        .state('administration.notifications', {
          url: '/notifications',
          templateUrl: 'app/pages/administration/Notifications/Notifications.html',
          controller: 'NotificationsPageCtrl',
          title: 'Notifications',
          sidebarMeta: {
            order: 70,
          },
        })
        .state('administration.organization', {
          url: '/organization',
          templateUrl: 'app/pages/administration/Organization/Organization.html',
          controller: 'OrganizationPageCtrl',
          title: 'Organization',
          sidebarMeta: {
            order: 61,
          },
        })
        .state('administration.passwordResetSettings', {
          url: '/passwordResetSettings',
          templateUrl: 'app/pages/administration/PasswordResetSettings/PasswordResetSettings.html',
          controller: 'PasswordResetSettingsPageCtrl',
          title: 'Password Settings',
          sidebarMeta: {
            order: 69,
          },
        })
        .state('administration.permissions', {
          url: '/permissions',
          templateUrl: 'app/pages/administration/Permissions/Permissions.html',
          controller: 'PermissionsPageCtrl',
          title: 'Permissions',
          sidebarMeta: {
            order: 67,
          },
        })
        .state('administration.roles', {
          url: '/roles',
          templateUrl: 'app/pages/administration/Roles/Roles.html',
          controller: 'RolesPageCtrl',
          title: 'Roles',
          sidebarMeta: {
            order: 66,
          },
        })
        .state('administration.supportUsers', {
          url: '/supportUsers',
          templateUrl: 'app/pages/administration/SupportUsers/SupportUsers.html',
          controller: 'SupportUsersPageCtrl',
          title: 'Support Users',
          sidebarMeta: {
            order: 62,
          },
        });
  }

})();

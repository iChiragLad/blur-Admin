/**
 * @author c.lad
 * created on 08.03.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.fluid_topics', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('fluid_topics', {
          url: '/fluid_topics',
          templateUrl: 'app/pages/fluid_topics/fluid_topics.html',
          abstract: true,
          title: 'Fluid Topics',
          sidebarMeta: {
            icon: 'ion-document-text',
            order: 10
          },
        })
        .state('fluid_topics.search', {
          url: '/search',
          templateUrl: 'app/pages/fluid_topics/Search/Search.html',
          controller: 'SearchPageCtrl',
          title: 'Search',
          sidebarMeta: {
            order: 11,
          },
        })
        .state('fluid_topics.manageTaxonomies', {
          url: '/manageTaxonomies',
          templateUrl: 'app/pages/fluid_topics/ManageTaxonomies/ManageTaxonomies.html',
          controller: 'ManageTaxonomiesPageCtrl',
          title: 'Manage Taxonomies',
          sidebarMeta: {
            order: 12,
          },
        })
        .state('fluid_topics.manage', {
          url: '/manage',
          templateUrl: 'app/pages/fluid_topics/Manage/Manage.html',
          controller: 'ManagePageCtrl',
          title: 'Manage',
          sidebarMeta: {
            order: 13,
          },
        });
  }

})();

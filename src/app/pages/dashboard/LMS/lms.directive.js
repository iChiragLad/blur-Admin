/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('lms', lms);

  /** @ngInject */
  function lms() {
    return {
      restrict: 'E',
      controller: 'LmsPageCtrl',
      templateUrl: 'app/pages/dashboard/LMS/lms.html'
    };
  }
})();
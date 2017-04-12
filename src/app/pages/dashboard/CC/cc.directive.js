/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('cc', cc);

  /** @ngInject */
  function cc() {
    return {
      restrict: 'E',
      controller: 'CcPageCtrl',
      templateUrl: 'app/pages/dashboard/CC/cc.html'
    };
  }
})();
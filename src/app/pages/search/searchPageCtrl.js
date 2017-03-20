(function () {
    'use strict'

    angular.module('BlurAdmin.pages.search')
        .controller('searchPageCtrl', searchPageCtrl)
        .constant("appSettings", {
            serverPath: "http://localhost:60137/"
        })

    function searchPageCtrl($scope, $http, appSettings) {
        $scope.searchBox = true;
        $scope.searchResult = false;
        $scope.SearchCentral = function () {

            $scope.searchResult = true;
            $scope.searchBox = false;

            $http({
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                url: appSettings.serverPath + "api/Admin/GetRegistrationUsersBySearchCriteria"
            }).then(function successCallback(response) {
                $scope.data = response.data;
            }, function errorCallback(response) {
                console.log("error");
            });
        }
    }
})();
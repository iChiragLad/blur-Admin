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

            //             $scope.loader = false;
            //             $scope.searchBox = false;
            //             $scope.searchResult = true;
            //             $scope.data = [{
            //     "Name": "Chirag lad",
            //     "Phone": "9021610939",
            //     "Username": "chirag.lad@allscripts.com",
            //     "OracleID": "231234",
            //     "Email": "chirag.lad@allscripts.com",
            //     "Account": "Allscripts Health Care",
            //     "AccountNumber": "10020052",
            //     "ControlID": "jwsckjwokcoewijcowe219898",
            //     "IsActive": true,
            //     "LastLogOn": "2017-03-27T14:59:37.2203944+05:30"
            //   },
            //   {
            //     "Name": "Aniruddha Gokhale",
            //     "Phone": "9021837456",
            //     "Username": "aniruddha.gokhale@allscripts.com",
            //     "OracleID": "433232",
            //     "Email": "aniruddha.gokhale@allscripts.com",
            //     "Account": "Allscripts Inc.",
            //     "AccountNumber": "10020052",
            //     "ControlID": "321098kjckjds98743kjsandkj",
            //     "IsActive": true,
            //     "LastLogOn": "2017-03-27T14:59:37.2203944+05:30"
            //   },
            //   {
            //     "Name": "Adesh Arora",
            //     "Phone": "8324876456",
            //     "Username": "adesh.arora@allscripts.com",
            //     "OracleID": "456217",
            //     "Email": "adesh.arora@allscripts.com",
            //     "Account": "Allscripts Health Care",
            //     "AccountNumber": "98123412",
            //     "ControlID": "45avfdkdsjcmdu2749849dj",
            //     "IsActive": true,
            //     "LastLogOn": "2017-03-27T14:59:37.2203944+05:30"
            //   },
            //   {
            //     "Name": "Michle External",
            //     "Phone": "3123908734",
            //     "Username": "michle.external@allscripts.com",
            //     "OracleID": "21213456",
            //     "Email": "michle.external@allscripts.com",
            //     "Account": "North Shore Health Inc.",
            //     "AccountNumber": "10020052",
            //     "ControlID": "dks87231687xjsadoi8393892",
            //     "IsActive": true,
            //     "LastLogOn": "2017-03-27T14:59:37.2203944+05:30"
            //   }];

            
            $scope.topOrgData = [{
                "Account": "Allscripts Health Care",
                "Views": 212
            },
            {
                "Account": "North Shore Health System",
                "Views": 198
            },
            {
                "Account": "Baptist Health Care Corporation",
                "Views": 132
            },
            {
                "Account": "Mclaren Health Care",
                "Views": 98
            },
            {
                "Account": "Nextrix Systems",
                "Views": 54
            }];

            $scope.loader = true;
            $scope.searchBox = false;

            $http({
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                url: appSettings.serverPath + "api/Admin/GetRegistrationUsersBySearchCriteria?predicate=" + $scope.queryText + "&filterBy=All"
            }).then(function successCallback(response) {
                $scope.loader = false;
                $scope.searchResult = true;
                $scope.data = response.data;
            }, function errorCallback(response) {
                $scope.loader = false;
                $scope.searchResult = false;
                $scope.searchBox = true;
                console.log("error");
            });
        }
    }
})();
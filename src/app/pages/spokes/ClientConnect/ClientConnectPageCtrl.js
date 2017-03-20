(function(){
    'use strict'

    angular.module('BlurAdmin.pages.spokes')
        .controller('ClientConnectPageCtrl', ClientConnectPageCtrl);

        function ClientConnectPageCtrl($scope){
            $scope.clientC = "Hello ClientC....";
        }
})();
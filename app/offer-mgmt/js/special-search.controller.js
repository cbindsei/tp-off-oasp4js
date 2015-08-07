angular.module('app.offer-mgmt')
    .controller('SpecialSearchCntl', function ($scope, paginatedSpecialsList) {
        $scope.gridOptions = {
            data: paginatedSpecialsList.result
        };
    });
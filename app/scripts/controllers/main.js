'use strict';

/**
 * @ngdoc function
 * @name finsightUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the finsightUiApp
 */
angular.module('finsightUiApp')
  .controller('MainCtrl', ['$scope', '$http',
    function ($scope, $http) {

    $scope.strategyResults = '';
    $scope.labels = [];
    $scope.series = [];
    $scope.data = [];


    $scope.loadOutcome = function(){
        $http.get('/finsight/strategy').success(function(data) {
            $scope.strategyResults = data;
            console.log('Loaded Strategy Outcome: ' + angular.toJson(data));

            $scope.labels = $scope.strategyResults.date;
            $scope.series = ['Unit Prices'];
            $scope.data = [
                $scope.strategyResults.unitPrice
            ];

        }).error(function(){
            console.log('Unable to load strategy outcome');
        });
    };

    $scope.loadOutcome();

  }]);

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

    $scope.outcome = '';

    $scope.loadOutcome = function(){
        $http.get('/finsight/strategy').success(function(data) {
            $scope.outcome = data;
            console.log('Loaded Strategy Outcome: ' + angular.toJson(data));
        }).error(function(){
            console.log('Unable to load strategy outcome');
        });
    };

    $scope.loadOutcome();

  }]);

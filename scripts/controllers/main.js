'use strict';

/**
 * @ngdoc function
 * @name angularRestfulApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularRestfulApp
 */
angular.module('angularRestfulApp')
  .controller('MainCtrl', function ($scope, Wine) {
    $scope.Wines = Wine.query();
    
    $scope.PostData = function(wineId, data) {
        if (wineId != 0) {
            Wine.put({id : windId}, data, function() 
            {
                $scope.Wines = Wine.query();
            });
        }
        else {
            Wine.save({}, data, function() 
            {
                $scope.Wines = Wine.query();
            });
        }
    };

    $scope.AddData = function() {
        $scope.Wines.push({"_id" : "0" });
    };
    
    });
  

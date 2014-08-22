'use strict';

/**
 * @ngdoc function
 * @name angularRestfulApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularRestfulApp
 */
angular.module('angularRestfulApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

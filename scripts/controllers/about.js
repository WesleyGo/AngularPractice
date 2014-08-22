'use strict';

/**
 * @ngdoc function
 * @name angularRestfulApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularRestfulApp
 */
angular.module('angularRestfulApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

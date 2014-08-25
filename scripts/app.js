'use strict';

/**
 * @ngdoc overview
 * @name angularRestfulApp
 * @description
 * # angularRestfulApp
 *
 * Main module of the application.
 */
angular
  .module('angularRestfulApp', [
    'ngRoute',
    'ngResource'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

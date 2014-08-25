/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('angularRestfulApp')
  .service('Wine', function ($resource) {
    return $resource('http://localhost:3000/wines/:id', {}, {
      'put':   {method:'PUT'},
    });
  });



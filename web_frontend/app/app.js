'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngSanitize',
  'myApp.homepage',
  'myApp.analysisView',
  'myApp.version',
  'myApp.cartelServices',
  'myApp.teampage',
  'myApp.twitterServices'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/homepage'});
}]);

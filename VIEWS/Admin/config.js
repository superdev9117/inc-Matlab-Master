
var app = angular.module('adminApp', ['ngRoute', 'ngSanitize'] );

app.config(['$routeProvider', function ($routeProvider) {
    'use strict';
   $routeProvider
   .when('/', {
       templateUrl: 'Admin/pages/instruction.htm'
   })
   .when('/instructions', {
       templateUrl: 'Admin/pages/instruction.htm',
       controller: 'instructionController'
   })
   .when('/builder', {
       templateUrl: 'Admin/pages/builder.htm',
       controller: 'builderController'
   })
   .when('/example', {
       templateUrl: 'Admin/pages/example.htm',
       controller: 'exampleController'
   })
   .when('/overview', {
       templateUrl: 'Admin/pages/overview.htm',
       controller: 'overviewController'
   })
   .when('/analytics', {
       templateUrl: 'Admin/pages/analytics.htm',
       controller: 'analyticsController'
   })
   .when('/export', {
       templateUrl: 'Admin/pages/export.htm',
       controller: 'overviewController'
   })
  .when('/reports', {
       templateUrl: 'Admin/pages/reports.htm',
       controller: 'overviewController'
   });
}]);

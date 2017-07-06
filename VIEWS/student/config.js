var app = angular.module('studentApp', ['ngRoute', 'ngSanitize', 'ui.ace']);

app.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
        .when('/', {
            templateUrl: 'announcements.htm'
        })
        .when('/example', {
            templateUrl: 'newExample.htm'
        })
        .when('/chapter9', {
            templateUrl: 'Chapter9Assessment.html'
        })
        .when('/chapter9a', {
            templateUrl: 'Chapter9S1.html'
        })
        .when('/Chapter10', {
            templateUrl: 'Chapter10S1.html'
        })
        .when('/Chapter54', {
            templateUrl: 'Chapter3S1.html'
        })
        .when('/videos', {
            templateUrl: 'videos.htm'
        })
        .when('/grades', {
            templateUrl: '/pages/grades.htm'
        })
        .when('/notes', {
            templateUrl: 'notes.htm'
        })

        .when('/notes10', {
            templateUrl: 'notes10.htm'
        })

        .when('/lectureVideo', {
            templateUrl: 'lectureVideo.htm'
        })
        .when('/exampleVideo', {
            templateUrl: 'exampleVideo.htm'

        })

        .when('/sudoCode', {
            templateUrl: 'SudoCode.htm'
        })
        .when('/conCode', {
            templateUrl: 'Conditional.html'
        })

        .when('/animation', {
            templateUrl: 'Animation.html'
        })

        .when('/pcTable', {
            templateUrl: 'PC-example2.html'
        })
        .when('/tutorial', {
            templateUrl: 'tutorial.htm'
        })
        .when('/ifAnimation', {
            templateUrl: 'AnimationIF.html'
        })
        .when('/octave', {
            templateUrl: 'Codebox.html'
        })
        .when('/chapter2', {
            templateUrl: 'Chapter2.html'
        })
        .when('/chapter5s1', {
            templateUrl: 'Chapter5S1.html'
        })
        .when('/chapter5s2', {
            templateUrl: 'Chapter5S2.html'
        })
        .when('/chapter5s3', {
            templateUrl: 'Chapter5S3.html'
        })
        .when('/chapter5s4', {
            templateUrl: 'Chapter5S4.html'
        })
        .when('/chapter5s5', {
            templateUrl: 'Chapter5S5.html'
        })
        .when('/chapter5s6', {
            templateUrl: 'Chapter5S6.html'
        })
        .when('/chapter5s7', {
            templateUrl: 'Chapter5S7.html'
        })
        .when('/chapter8s1', {
            templateUrl: 'Chapter8S1.html'
        })
        .when('/chapter3', {
            templateUrl: 'Chapter3S1.html'

        });
}]);

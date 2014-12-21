/**
 * Created by Umayr on 12/20/2014.
 */

(function () {
    'use strict';

    var app = angular.module('umayrshahid', ['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/index.html',
                controller: 'IndexController'
            })
            .when('/design', {
                templateUrl: 'views/design.html',
                controller: 'DesignController'
            })
            .when('/code', {
                templateUrl: 'views/code.html',
                controller: 'CodeController'
            })
            .when('/error', {
                templateUrl: 'views/error.html',
                controller: 'ErrorController'
            })
            .otherwise({
                redirectTo: '/error'
            })

        /*$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });*/
    }]);
})();
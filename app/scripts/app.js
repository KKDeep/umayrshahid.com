/**
 * Created by Umayr on 12/20/2014.
 */

(function () {
    'use strict';

    var app = angular.module('umayrshahid', ['ngRoute']);

    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/index.html',
                controller: 'IndexController'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
})();
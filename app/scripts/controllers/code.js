/**
 * Created by Umayr on 12/20/2014.
 */

(function () {
    'use strict';

    angular.module('umayrshahid')
        .controller('CodeController', ['$scope', 'Border', controller]);

    function controller($scope, Border) {
        Border.setBorder('code');

        $scope.projects = [
            {
                name: 'Dawlance',
                url: 'http://www.dawlance.com.pk',
                description: 'Home of all Dawlance products, backed by PHP and a little bit angular. It was developed under agency The Green Man\'s Ark.'
            },
            {
                name: 'TenSports Pakistan',
                url: 'http://www.tensportspak.com',
                description: 'TenSports Pakistan website.'
            },
            {
                name: 'Typewalk',
                github: 'https://github.com/umayr/typewalk',
                description: 'Explore google fonts with a little swag.'
            },
            {
                name: 'Badass',
                github: 'https://github.com/umayr/badass',
                description: 'A tiny script that can make you look badass on github written in golang.'
            },
            {
                name: 'Fontlr',
                github: 'https://github.com/umayr/fontlr',
                description: 'Manage your fonts, just like that.'
            },
            {
                name: 'Dark Peacock',
                github: 'https://github.com/umayr/dark-peacock',
                description: 'Dark variant of Peacock colour scheme for JetBrains Family.'
            }
        ];

        $scope.isUndefined = function (value) {
            return typeof value === 'undefined';
        }
    }
})();
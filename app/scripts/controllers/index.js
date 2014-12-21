/**
 * Created by Umayr on 12/20/2014.
 */

(function () {
    'use strict';

    angular.module('umayrshahid')
        .controller('IndexController', ['$scope', 'Border', controller]);

    function controller($scope, Border) {
        $scope.socialLinks = [
            {
                name: 'github',
                link: '#',
                icon: 'fa-github'
            },
            {
                name: 'twitter',
                link: '#',
                icon: 'fa-twitter'
            },
            {
                name: 'dribbble',
                link: '#',
                icon: 'fa-dribbble'
            }
        ];
        Border.setBorder('black');
    }
})();
/**
 * Created by Umayr on 12/20/2014.
 */

(function () {
    'use strict';

    angular.module('umayrshahid')
        .controller('RootController', ['$scope', controller]);

    function controller($scope) {
        $scope.border = function () {
            return 'black-border';
        };
    }
})();
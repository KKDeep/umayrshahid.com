/**
 * Created by Umayr on 12/20/2014.
 */

(function () {
    'use strict';

    angular.module('umayrshahid')
        .controller('RootController', ['$scope', '$rootScope', 'Border', 'EVENTS', controller]);

    function controller($scope, $rootScope, Border, EVENTS) {

        var getBorder = function () {
            $scope.border = Border.getBorder();
        };

        getBorder();

        $rootScope.$on(EVENTS.onBorderChanged, function () {
            getBorder();
        });

    }
})();
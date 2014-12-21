/**
 * Created by Umayr on 12/20/2014.
 */
(function () {
    'use strict';

    angular.module('umayrshahid')
        .factory('Border', ['$rootScope', 'EVENTS', service]);

    function service($rootScope, EVENTS) {
        var all = ['black', 'design', 'code', 'error'];
        var current;
        var setBorder = function (value) {
            if (all.indexOf(value) > -1) {
                current = value;
                $rootScope.$broadcast(EVENTS.onBorderChanged);
            }
            return false;
        };

        var getBorder = function () {
            if (typeof current === 'undefined') {
                current = all[0];
                return current;
            }
            return current;
        };

        return{
            setBorder: setBorder,
            getBorder: getBorder
        };

    }
})();
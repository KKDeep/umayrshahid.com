/**
 * Created by Umayr on 12/20/2014.
 */

(function () {
    'use strict';

    angular.module('umayrshahid')
        .controller('ErrorController', ['$scope', 'Border', controller]);

    function controller($scope, Border) {
        Border.setBorder('error');
    }

})();

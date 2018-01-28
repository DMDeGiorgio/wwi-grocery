'use strict';

angular.
    module('worldwideimportersApp').
    controller('navController', ['Cart',
        function navController(Cart) {
            var vm = this;
            vm.Cart = Cart;
            vm.isNavCollapsed = true;

        }]);
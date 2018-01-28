'use strict';

angular.
    module('worldwideimportersApp').
    controller('cartController', ['Cart',
        function cartController(Cart) {
            var vm = this;
            vm.Cart = Cart;
            vm.shippingCost = 10;
            vm.tax = 0.1;
            vm.checkout = checkout;

            function checkout() {
                alert(
                    'Name: ' + vm.name +
                    '\nAddress: ' + vm.address +
                    '\nCity: ' + vm.city +
                    '\nPhone Number: ' + vm.phone +
                    '\n\nTotal: ' + vm.total
                );
                vm.Cart.empty();
            };

        }]);
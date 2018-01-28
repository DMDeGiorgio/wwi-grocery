'use strict';

angular.
    module('worldwideimportersApp').
    controller('productController', ['Product', 'Cart', '$routeParams', '$window', '$location',
        function productController(Product, Cart, $routeParams, $window, $location) {
            var vm = this;
            vm.product;
            vm.filledStars = [];
            vm.emptyStars = [];
            vm.window = $window;
            vm.quantity = 1;
            vm.addToCart = addToCart;

            Product.getProduct($routeParams.productName)
                .then(function (result) {
                    if (result) {
                        vm.product = result;
                        for (var i = 0; i < vm.product.rating; i++) {
                            vm.filledStars.push(i);
                        };
                        for (i = 0; i < 5 - vm.product.rating; i++) {
                            vm.emptyStars.push(i);
                        };
                    } else {
                        $location.path('/');
                        $location.replace();
                    };
                }, function (result) {
                    console.log('Error retrieving data.');
                });

            function addToCart() {
                Cart.addProduct(vm.product, vm.quantity);
            };

        }]);
'use strict';

angular.
    module('worldwideimportersApp').
    controller('homepageController', ['Product', '$rootScope',
        function homepageController(Product, $rootScope) {
            var vm = this;

            if (!$rootScope.homepageState) {
                $rootScope.homepageState = {
                    slideShow: true,
                    active: 0
                };
            };
            vm.myInterval = 3000;
            vm.noWrapSlides = false;
            var slides = vm.slides = [];
            var currIndex = 0;

            vm.addSlide = function (name) {

                Product.getProduct(name)
                    .then(function (result) {
                        slides.push({
                            image: result.imagelink,
                            text: result.name,
                            description: result.description,
                            id: currIndex++
                        });
                    }, function (result) {
                        console.log('Error retrieving data');
                    });
            };

            vm.addSlide('Gala Apples');
            vm.addSlide('Vinegar');
            vm.addSlide('Swiss Cheese');
            vm.addSlide('Olive Oil');
        }]);
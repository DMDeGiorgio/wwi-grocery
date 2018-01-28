'use strict';

angular.
    module('worldwideimportersApp').
    controller('shoppingController', ['Product', 'Cart', '$rootScope',
        function shoppingController(Product, Cart, $rootScope) {
            var vm = this;

            if (!$rootScope.shoppingState) {
                $rootScope.shoppingState = {
                    selectedCategoryName: '',
                    selectedSubcategoryObj: null,
                    inStockOnly: false,
                    orderProp: 'subcategory' // Sort By: 'None' 
                };
            };
            vm.products = [];
            vm.collapseAtBeginning = collapseAtBeginning;
            vm.selectSubcategory = selectSubcategory;
            vm.filterItems = filterItems;
            vm.addToCart = addToCart;

            Product.getAllProducts()
                .then(function (result) {
                    vm.products = result.data;
                }, function (result) {
                    console.log('Error retrieving data.');
                });

            function collapseAtBeginning(isCollapsed, categoryName) {
                if (typeof isCollapsed === 'undefined' && categoryName === $rootScope.shoppingState.selectedCategoryName) {
                    return false;
                }
                else if (typeof isCollapsed === 'undefined'){
                    return true;
                } else {
                    return isCollapsed;
                };
            };

            function selectSubcategory(categoryName, subcategory) {
                $rootScope.shoppingState.selectedCategoryName = categoryName;
                $rootScope.shoppingState.selectedSubcategoryObj = subcategory;
            };

            function filterItems(item) {
                if ($rootScope.shoppingState.inStockOnly) {
                    return item.stock !== '0';
                } else {
                    return true;
                }
            };

            function addToCart(product) {
                Cart.addProduct(product, 1);
            };

        }]);
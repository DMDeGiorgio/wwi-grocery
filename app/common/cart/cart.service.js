'use strict';

angular.
  module('common').
  factory('Cart', [
    function () {

      var products = {};

      var service = {
        addProduct: addProduct,
        removeProduct: removeProduct,
        getProducts: getProducts,
        getSubtotal: getSubtotal,
        checkQty: checkQty,
        countProducts: countProducts,
        empty: empty
      };

      return service;

      function addProduct(product, qty) {

        if (!(product.name in products)) {
          product.qty = qty;
          products[product.name] = product;
        } else {
          products[product.name].qty += qty;
        };
      };

      function getProducts() {
        return products;
      };

      function getSubtotal() {
        var productName;
        var subtotal = 0;
        for (productName in products) {
          subtotal += products[productName].price * checkQty(products[productName].qty);
        };
        return subtotal;
      };

      function checkQty(qty) {
        if (isNaN(qty)) {
          return 1;
        } else {
          return qty;
        };
      };

      function removeProduct(productName) {
        if (productName in products) {
          delete products[productName];
        };
      };

      function countProducts() {
        var productName;
        var count = 0;
        for (productName in products) {
          count += checkQty(products[productName].qty);
        };
        return count;
      };

      function empty() {
        products = {};
      };

    }
  ]);
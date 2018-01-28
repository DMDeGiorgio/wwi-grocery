'use strict';

angular.
  module('common').
  factory('Product', ['$http', '$q',
    function ($http, $q) {

      var service = {
        getAllProducts: getAllProducts,
        getProduct: getProduct
      };

      return service;

      function getAllProducts() {
        return $http.get('https://webmppcapstone.blob.core.windows.net/data/itemsdata.json');
      }

      function getProduct(name) {
        var defer = $q.defer();

        getAllProducts()
          .then(function (result) {
              defer.resolve(searchProduct(result.data, name));
          }, function (result) {
            defer.reject(result);
          });

        return defer.promise;
      }

      function searchProduct(allProducts, name) {

        var product;

        searchLoop: for (var i = 0; i < allProducts.length; i++) {
          for (var j = 0; j < allProducts[i].subcategories.length; j++) {
            for (var k = 0; k < allProducts[i].subcategories[j].items.length; k++) {
              if (allProducts[i].subcategories[j].items[k].name === name) {
                product = allProducts[i].subcategories[j].items[k];
                break searchLoop;
              }
            }
          }
        }

        return product;
      }

    }
  ]);
'use strict';

angular.
  module('worldwideimportersApp').
  config([
    '$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);

      $routeProvider.
        when('/', {
          templateUrl: 'homepage/homepage.template.html',
          controller: 'homepageController',
          controllerAs: 'vm'
        }).
        when('/shopping', {
          templateUrl: 'shopping/shopping.template.html',
          controller: 'shoppingController',
          controllerAs: 'vm'
        }).
        when('/product/:productName', {
          templateUrl: 'product/product.template.html',
          controller: 'productController',
          controllerAs: 'vm'
        }).
        when('/cart', {
          templateUrl: 'cart/cart.template.html',
          controller: 'cartController',
          controllerAs: 'vm'
        }).
        when('/contact', {
          templateUrl: 'contact/contact.template.html',
          controller: 'contactController',
          controllerAs: 'vm'
        }).
        when('/about', {
          templateUrl: 'about/about.template.html'
        }).
        otherwise({redirectTo: '/'});
    }
  ]);
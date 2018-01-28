'use strict';

angular.
    module('worldwideimportersApp').
    controller('contactController', [
        function contactController() {
            var vm = this;
            vm.send = send;

            function send() {
                alert(
                    'Message sent:\n' + vm.message
                );
                vm.name = '';
                vm.email = '';
                vm.subject = '';
                vm.message = '';
            };

        }]);
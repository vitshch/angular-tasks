var module = angular.module('social', []);

module.controller('UserController', function($scope, $http) {
    $scope.user = {};
    $scope.loginUser = function(user) {
        $http.post("/login", user)
                .success(function() {
                    console.log("test");
                    update();
                });
    };
});
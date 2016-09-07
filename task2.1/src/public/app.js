var module = angular.module('task2.1', []);

module.controller("HelloController", function($scope, $http) {
    $scope.greeting = {};
    $scope.greeting = "Hello";
    $scope.$watch("name", function() {
        $scope.update();
    });
    $scope.update = function() {
        $scope.greeting = "Hi Jack";
        if($scope.name) {
            $http.get("/greeting", {params: {name: $scope.name}})
            .success(function(res) {
                $scope.greeting = res;
            });
        }
    }
});
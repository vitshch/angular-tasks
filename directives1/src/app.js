var module = angular.module("dir-app", []);

module.controller("ListController", function($scope) {
    $scope.userList = ['Vasya', 'Petya', 'Ivan', 'Gennadiy'];
});

module.controller("TestController", function($scope) {
    $scope.testList = ['basba', 'asdfasdf'];
});

module.directive("list", function() {
    var directive = {};

    directive.restrict = 'E';
    directive.template = "<ol></ol>";

    directive.link = function($scope, element, attributes) {
        var el = element.find('ol');
        var arr = $scope[attributes['content']];
        for(var item in arr) {
            el.append("<li>" + arr[item] + "</li>");
        }
    }

    return directive;
});
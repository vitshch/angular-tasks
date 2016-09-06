var module = angular.module('filterApp', [])

module.controller("FilterController", function($scope) {
   $scope.data = {
        list: [{name: 'Dima'}, {name: 'Vasya'}, {name: 'Pedro'},{name: 'Igor'}, {name: 'Egor'}, {name: 'Marina'}, {name: 'Inna'}]
   };
});

module.filter('nameFilter', function() {
    return function(name) {
        if(name.toLowerCase().indexOf('a') > -1) {
            return name;
        }
    }
});

module.filter('itemsFilter', function() {
    return function(arrayOfNames) {
        var result = [];
        for(var item in arrayOfNames) {
            if(item.name.toLowerCase().indexOf('a') > -1) {
                             result.push(name);
             }
        }
        return result;
    }
});
var module = angular.module('myapp', []);

module.controller('NotesController', function($scope, $http, $q) {
    $scope.notes = [];
    var asyncRead = function() {
        var deferred = $q.defer();
        console.log('asyncRead')
        setTimeout(function() {
            deferred.notify('Getting nodes...');

            if (readNotes()) {
                deferred.resolve($http.get("/notes"));
            } else {
                deferred.reject('Reject');
            }
        }, 1000);

        return deferred.promise;
    };

    var readNotes = function() {
        return true;
    };

    var loadNotes = function() {
        var promise = asyncRead();

        promise.then(function(notes) {
            console.log(notes);
            $scope.notes = notes.data;
        }), function(reason) {
            alert('Failed: ' + reason);
        };

    };

    loadNotes();


});
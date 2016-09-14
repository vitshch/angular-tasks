var module = angular.module('myapp', ['dndLists', 'ngRoute']);

module.config(function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'rotes/notes/notes.html',
                              controller : 'NotesController'})

                  .when('/section/:name', {
                               templateUrl: 'routes/viewSection/viewSection.html',
                               controller: 'ViewSectionController'
                  })
                  .when('/:section?', {
                                templateUrl: 'routes/notes/notes.html',
                                controller: 'NotesController'
                  })
                  .otherwise({redirectTo: '/'});
});
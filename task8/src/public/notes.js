var module = angular.module('myapp', []);

module.controller('NotesController', function($scope, $http) {
    $scope.notes = [];

    var update = function() {
        var params = {params:{section:$scope.activeSection}};
        $http.get("/notes", params)
            .success(function(notes) {
                $scope.notes = notes;
            });
    };

    update();

    $scope.add = function() {
        var note = {text: $scope.text};
        $http.post("/notes", note)
                .success(function() {
                    $scope.text = "";
                    update();
                });
    };

    $scope.remove = function(id) {
        $http.delete("/notes", {params: {id:id}})
        .success(function() {update()})
    }

   var readSections = function() {
           $http.get("/sections")
               .success(function(sections) {
                   console.log(sections);
                   $scope.sections = sections;
                   if ($scope.activeSection == null && $scope.sections.length>0) {
                        $scope.activeSection = $scope.sections[0].title;
                   }
                   update();
                });
   }
   readSections();

    $scope.showSection = function(section) {
        $scope.activeSection = section.title;
        update();
    }
});
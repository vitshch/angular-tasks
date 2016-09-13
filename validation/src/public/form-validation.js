var module = angular.module("form-app", []);

module.controller("SignInController", function($scope) {
   $scope.myForm.submit = function(myForm) {
       console.log(myForm)
   };
});
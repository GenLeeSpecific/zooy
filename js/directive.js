angular.module('myApp', ['myControllers','myDirectives']);
angular.module('myDirectives', []).directive('myHello', function() {
  return {
    template: '<div>Check out our upcoming gig dates!</div>',
    restrict: 'EA'
  };
});
angular.module('myControllers',[])
.controller('DirectiveController',function($scope) {
  $scope.user = {};
});

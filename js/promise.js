angular.module('myApp',['promiseControllers','ourServices']);

angular.module('ourServices',[])
.factory('OurPromise', function($q, $timeout) {

  var getMessages = function() {
    var deferred = $q.defer(); // set up the promise
                               // referenced by deferred.promise
    // the function inside the timeout gets executed after delay 2000ms
    $timeout(function() {
      deferred.resolve({message: 'Latest Video'});//return results
    }, 2000);
    return deferred.promise; //return the promise object
    };   
  return { getMessages: getMessages };
});

angular.module('promiseControllers',[])
.controller('PromiseController', function($scope, OurPromise) {
    $scope.PromiseComplete = false;
    OurPromise.getMessages().then(function(result) {
               //messages is what is returned from resolve()
               $scope.message = result.message;
        	   $scope.PromiseComplete = true;
    });
});
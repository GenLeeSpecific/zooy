angular.module('routingControllers', [])
 .controller('HomeController', function ($scope) {
  //put your code here
 })
 .controller('AboutController', function ($scope) {
  //put your code here
 })
 .controller('ContactController', function ($scope) {
  //put your code here
 })
 .controller('GigsController', function ($scope) {
  $scope.toggle = function (type) {
   $('.main-container .weddings-corporate-container .' + type + '-text').toggle(1000);
  };
 })
 .controller('MusicController', function ($scope) {
  //put your code here
 })
 .controller('BiosController', function ($scope) {
 })
 .controller('UpcomingController', function ($scope) {
  //put your code here
 })
 .controller('WeddingsAndCorporateController', function ($scope) {
  //put your code here
 })
 .controller('ContactAndBookingsController', function ($scope) {
  //put your code here
 });

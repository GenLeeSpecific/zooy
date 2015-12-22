// create the module and name it mainApp
// also include ngRoute for all our routing needs
angular.module('routingApp', ['ngRoute','routingControllers']);
// Now we could do live coding here, do u see it?? - yep
// much better than editey
// by the way below panel there is something called serve, do u see it? - yep
// click on the run button, it runs your app here
// it seems there is an existing serve running let me kill it
// Done! try one more time
// configure our routes
angular.module('routingApp').config(function($routeProvider) {
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl : 'templates/Home.html',
			controller  : 'HomeController'
		})
		// route for the about page
		.when('/about', {
			templateUrl : 'templates/About.html',
			controller  : 'AboutController'
		})
		// route for the contact page
		.when('/contact', {
			templateUrl : 'templates/Contact.html',
			controller  : 'ContactController'
		})
		.when('/OurMusic', {
			templateUrl : 'templates/OurMusic.html',
			controller  : 'MusicController'
		})
		.when('/MembersBios', {
			templateUrl : 'templates/MembersBios.html',
			controller  : 'BiosController'
		})
		.when('/UpcomingGigs', {
			templateUrl : 'templates/UpcomingGigs.html',
			controller  : 'UpcomingController'
		})
		.when('/WeddingsAndCorporate', {
			templateUrl : 'templates/WeddingsAndCorporate.html',
			controller  : 'GigsController'
		})
		.when('/ContactAndBookings', {
			templateUrl : 'templates/ContactAndBookings.html',
			controller  : 'ContactAndBookingsController'
		})
		.otherwise({redirectTo: '/'}); ;
});

	
	
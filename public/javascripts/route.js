app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/content.html",
        controller: 'homeController'
    })
    .when("/user/add", {
        // add user 
        templateUrl : "views/user/addUser.html",
        controller: 'userController'
    })
    .when("/user", {
        // user list view
        templateUrl : "views/user/listUser.html",
        controller: 'userController'
    })
    .when("/user/show/:id", {
        // user show by one id 
        templateUrl : "views/user/showUser.html",
        controller: 'userController'
    })
    .when("/user/edit/:id", {
        // user show by one id 
        templateUrl : "views/user/addUser.html",
        controller: 'userController'
    })
    .when("/user/delete", {
        // user show by one id 
        templateUrl : "views/user/listUser.html",
        controller: 'userController'
    })
    .otherwise({
			redirectTo: '/'
	});

    // use the HTML5 History API
        $locationProvider.html5Mode(true); // for pretty method for url
});
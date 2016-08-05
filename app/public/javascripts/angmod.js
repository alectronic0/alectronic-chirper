var app = angular.module('myApp',['ngRoute', 'ngResource']).run(function($rootScope, $http){
  $rootScope.authenticated = false;
  $rootScope.current_user = "";

  $rootScope.logout = function(){
    $http.get('/auth/logout');
    $rootScope.authenticated = false;
    $rootScope.current_user = "";
  };

});


app.config(function($routeProvider){
  $routeProvider
  .when('/',{ templateUrl: 'main.html', controller: 'mainController'})
  .when('/login',{ templateUrl: 'login.html', controller: 'authController'})
  .when('/reg',{ templateUrl: 'reg.html', controller: 'authController'});
});

app.factory('postService', function($resource){//$http,
  // var baseApiURL = '/api/posts';
  // var factory = {};
  // factory.getAll = function(){return $http.get(baseApiURL);}
  // return factory;
  return $resource('/api/posts/:id');
});



app.controller('mainController', function($scope, $rootScope, postService, $http){
    $scope.posts = postService.query();
    $scope.newpost = {username:'',text:'',created_at:''};


    $scope.post = function(){
      $scope.newpost.username = $rootScope.current_user;
      $scope.newpost.created_at = Date.now();
      console.log("DEBGUGGG");
      console.log($scope.newpost);

      postService.save($scope.newpost, function(){
        $scope.posts = postService.query();
        console.log($scope.posts);
        $scope.newpost = {username:'',text:'',created_at:''};
      });
      console.log("DEBGUGGG");
      //$http.post('/api/posts', $scope.newpost).success(function(data){$scope.posts.push(data);}); // alternative
    };
});

app.controller('authController', function($scope, $rootScope, $http, $location){
    $scope.userslist = [];
    $scope.user = {username:'',password:'',created_at:''};
    $scope.error_message = '';

    $scope.register = function(){
      $scope.user.created_at = Date.now()
      $http.post('/auth/reg', $scope.user).success(function(data){
        console.log('DATATATATATAATAATTAT   ',data);
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user.username;
        $location.path('/');
      });
      //$scope.error_message = 'Trying to register ' + $scope.user.username;
      //$scope.user = {username:'',password:'',created_at:''};
    }


    $scope.login = function(){
      $http.post('/auth/login', $scope.user).success(function(data){
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user.username;

        $location.path('/');
      });
      //$scope.error_message = 'Trying to login ' + $scope.user.username;
      //$scope.user = {username:'',password:'',created_at:''};
    }

});

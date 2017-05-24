  angular.module('myApp', ['ngRoute'])
    .config( function($routeProvider){
        //going to config which route to go where
        $routeProvider.when("/", {
            templateUrl:"pages/main.html",
            controller:"MainController"
        })
        .when("/user/:id", {
            templateUrl:"pages/invoice.html",
            controller:"UserController"
        })

    })
    .controller("MainController", function($scope){
        $scope.message = "hello main";
    })
    .controller("UserController", function($scope, $routeParams){
      

        //user  = myservice.getData($routeParams.id)
        if($routeParams.id  == 1){
            $scope.data = "VIP USER"
        }else
            $scope.data = "NORMAL "

    })
    
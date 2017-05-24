  angular.module('myApp', ['ngRoute', 'myFactory'])
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
    .controller("MainController", ['$scope', 'userProvider', function($scope, userProvider){
        //recommended format

        $scope.users = userProvider.getUsers();
    }])
    .controller("UserController", function($scope, $routeParams, userProvider){
        //user  = myservice.getData($routeParams.id)
        //userProvider.getUserById($routeParams.id)
        //$scope.user = {id:1, name:"sompop", lastname:"kulapalanont", salary:50000, picture:"http://placehold.it/100x100"};
        $scope.user = userProvider.getUserById($routeParams.id);
     
        $scope.save = function(){
            userProvider.updateUser($routeParams.id, $scope.user.name, $scope.user.lastname, $scope.user.salary, $scope.user.picture)
        }
    })
    
  angular.module('myApp', ['ngRoute', 'myFactory'])
    .config( function($routeProvider){
        //going to config which route to go where
        $routeProvider.when("/", {
            templateUrl:"pages/main.html",
            controller:"MainController"
        })
        .when('/create', {
            templateUrl:"pages/create.html",
            controller:"UserController"
        })
        .when("/user/:id", {
            templateUrl:"pages/invoice.html",
            controller:"UserController"
        })

    })
    .controller("MainController", ['$scope', 'userProvider', function($scope, userProvider){
        //recommended format
        userProvider.load();
        $scope.users = userProvider.getUsers();
    }])
    .controller("UserController", function($scope, $routeParams, userProvider, $location){
        userProvider.load();
        //$scope.user = {id:1, name:"sompop", lastname:"kulapalanont", salary:50000, picture:"http://placehold.it/100x100"};
        if($routeParams.id){
            //update mode
            $scope.user = userProvider.getUserById($routeParams.id);
            //happen when click sve button
            $scope.save = function(){
                userProvider.updateUserById($routeParams.id, $scope.user.name, $scope.user.lastname, $scope.user.salary, $scope.user.picture)
                userProvider.save();
                $location.path('/');
            }
        }else{
            $scope.user  = {};
            $scope.save = function(){
                userProvider.createUser($scope.user.name, $scope.user.lastname, $scope.user.salary, $scope.user.picture)
                userProvider.save();
                $location.path('/');
            }
        }
        
    }).directive('userForm', function(){
        return {
            scope:{
                user:"=",
                save:"=onSave"
            },
            templateUrl : "widgets/user-form.html"
        }
    })
    
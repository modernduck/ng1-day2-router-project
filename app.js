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
        $scope.users = [
            {id:1, name:"sompop", lastname:"kulapalanont", salary:50000, picture:"http://placehold.it/100x100"},
            {id:2, name:"pichanok", lastname:"noobparn", salary:30000, picture:"http://placehold.it/100x100"},
            {id:3, name:"unnandunn", lastname:"gucheng", salary:50000, picture:"http://placehold.it/100x100"},
            {id:4, name:"lermisme", lastname:"marketting", salary:35000, picture:"http://placehold.it/100x100"},

        ]
    })
    .controller("UserController", function($scope, $routeParams){
      

        //user  = myservice.getData($routeParams.id)
        $scope.user = {id:1, name:"sompop", lastname:"kulapalanont", salary:50000, picture:"http://placehold.it/100x100"};
        if($routeParams.id  == 1){
            $scope.data = "VIP USER"
        }else
            $scope.data = "NORMAL "

    })
    
//
//
//
// Angular.js
var ProjectResourceApp = angular.module('ProjectResourceApp',['ngAnimate']);

ProjectResourceApp.run([function(){

}]);

ProjectResourceApp.config(['$locationProvider',function($locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        rewriteLinks: false
    }).hashPrefix('!');

}]);

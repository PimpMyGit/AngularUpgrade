'use strict'
var kamApp = angular.module('K4AppJS');
kamApp.controller('AbstractCustomComponentController',['$scope','$controller',function($scope,$controller)
{
	$controller('AbstractComponentController', { $scope: $scope });
}
]);

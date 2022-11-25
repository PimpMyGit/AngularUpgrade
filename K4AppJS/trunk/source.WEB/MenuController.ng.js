'use strict'
var kamApp = angular.module('K4AppJS');
kamApp.controller('MenuController',['$scope',function($scope)
{
	this.currentMenuName = $scope.name + '.html'
	;
}
]);

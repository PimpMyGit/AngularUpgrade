'use strict'
var kamApp = angular.module('K4AppJS');
kamApp.controller('LogOutPageController',['$scope','$controller','LogOutPageBSNFactory',function($scope,$controller,LogOutPageBSNFactory)
{
	$controller('AbstractPageController', { $scope: $scope });
	$scope.Init = function () {
	    $scope.PageWebServiceUrl = 'api/LogOutPage';
	    $scope.DefinedComponentsCount = 0;
	    $scope.Base_Init();
	    LogOutPageBSNFactory.PageScope = $scope;
	    LogOutPageBSNFactory.Page = null;
	    LogOutPageBSNFactory.On_PageInit();
	};
}
]);

'use strict'
var kamApp = angular.module('K4AppJS');
kamApp.directive('pgFormGroup',function()
{
	return {
	    restrict: 'A',
	    link: function(scope, element, attrs) {
	        $(element).click(function() {
	            $(element).find('input, textarea').focus();
	        });
	        $(element).on('focus', 'input, textarea', function() {
	            $('.form-group.form-group-default').removeClass('focused');
	            $(this).parents('.form-group').addClass('focused');
	        });
	        $(element).on('blur', 'input, textarea', function() {
	            $(this).parents('.form-group').removeClass('focused');
	        });
	    }
	}
}
);
kamApp.directive('speechToText',function()
{
	return {
	    restrict: 'E',
	    controller: 'SpeechToTextController',
	    templateUrl: 'SpeechToText.html?version=a42b1b07-59c5-44ee-9b00-199e0ae3d940',
	    scope:{
	        field: '='
	    }
	 }
}
);

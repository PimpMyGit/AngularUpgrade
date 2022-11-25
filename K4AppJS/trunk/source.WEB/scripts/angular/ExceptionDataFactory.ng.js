'use strict'
var kamApp = angular.module('K4AppJS');
kamApp.factory('ExceptionDataFactory',function()
{
	return {
	    ExceptionMessage: null,
	    ExceptionMessageText: null,
	    ExceptionWhere: null,
	    ExceptionStatus: null,
	    ExceptionStatusText: null,
	    ExceptionType: null,
	    ExceptionStackTrace: null,
	    ExceptionHtmlErrorBody: null,
	    ExceptionStandardMessage: null,
	    SourcePageInError: null
	};
}
);

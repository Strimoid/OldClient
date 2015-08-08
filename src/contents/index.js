var angular = require('angular');

angular
	.module('app')
	.controller('ContentListController', ContentListController);

function ContentListController($scope, Contents)
{
	$scope.contents = Contents.getList().$object;
	$scope.test = 'abcd';
}

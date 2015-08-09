var angular = require('angular');
var ps = require('perfect-scrollbar');

angular
    .module('app')
    .controller('SidebarController', SidebarController);

function SidebarController($scope, $document, Groups) {
    $scope.groups = Groups.getList({ sort: 'subscribers_count' }).$object;
}

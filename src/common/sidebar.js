var angular = require('angular');

angular
    .module('app')
    .controller('SidebarController', SidebarController);

function SidebarController($scope, Groups) {
    $scope.groups = Groups.getList().$object;
}

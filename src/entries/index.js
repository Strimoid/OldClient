var angular = require('angular');

angular
    .module('app')
    .controller('EntryListController', EntryListController);

function EntryListController($scope, Entries)
{
    $scope.entries = Entries.getList().$object;
}

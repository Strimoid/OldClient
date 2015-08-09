module.exports = function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    .otherwise('/');
  $stateProvider
    .state('contents', {
      url: '',
      controller: 'ContentListController',
      templateUrl: 'src/contents/index.html'
    })
    .state('entries', {
      url: '/entries',
      controller: 'EntryListController',
      templateUrl: 'src/entries/index.html'
    })
    .state('comments', {
      url: '/comments',
    })
};

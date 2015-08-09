module.exports = function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('contents', {
        url: '',
        controller: 'ContentListController',
        templateUrl: 'src/contents/index.html'
    })
    .state('content', {
        url: '/c/{id}'
    })
    .state('entries', {
        url: '/entries',
        controller: 'EntryListController',
        templateUrl: 'src/entries/index.html'
    })
    .state('comments', {
        url: '/comments',
        controller: 'CommentListController',
        templateUrl: 'src/comments/index.html'
    })

    $urlRouterProvider.otherwise('');
};

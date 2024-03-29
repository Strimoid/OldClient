var $ = require('jquery');
var angular = require('angular');

angular.module('app', [
        require('angular-sanitize'),
        require('angular-moment'),
        require('angular-ui-router'),
        require('restangular-browserify'),
    ])
    .config(require('./routes'))
    .config(function($locationProvider){
      //$locationProvider.html5Mode(true);
    })
    .config(function(RestangularProvider) {
    	RestangularProvider.setBaseUrl('https://strm.pl/api/v1');
    	RestangularProvider.setResponseExtractor(function(response, operation) {
        	if (response.data) {
          		return response.data;
        	}

        	return response;
      });
	})
    .directive('perfectScrollbar', require('./directives/perfect-scrollbar'))
    .factory('Contents', function(Restangular) {
    	return Restangular.service('contents');
	})
    .factory('Entries', function(Restangular) {
        return Restangular.service('entries');
    })
    .factory('Groups', function(Restangular) {
        return Restangular.service('groups');
    })
    .filter('cdn', require('./filters/cdn'));

require('./common/sidebar');
require('./contents/index');
require('./entries/index');

window.jQuery = $;

$(function() {
    $('.toggle-sidebar').click(function() {
        $('.ui.sidebar').sidebar('setting', 'dimPage', false).sidebar('toggle');
    });
});

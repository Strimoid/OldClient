var angular = require('angular');

angular.module('app', [
        require('angular-sanitize'),
        require('angular-moment'),
        require('angular-ui-router'),
        require('restangular-browserify'),
    ])
    .config(require('./routes'))
    .config(function(RestangularProvider) {
    	RestangularProvider.setBaseUrl('https://strm.pl/api/v1');
    	RestangularProvider.setResponseExtractor(function(response, operation) {
        	if (response.data) {
          		return response.data;
        	}

        	return response;
      });
	})
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

var angular = require('angular');

angular.module('app', [
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
    .filter('cdn', require('./filters/cdn'));

require('./contents/index');

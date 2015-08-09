var ps = require('perfect-scrollbar');

module.exports = function() {
    function link (scope, element, attrs) {
        ps.initialize(element[0]);
        ps.update(element[0]);
    }

    return {
        restrict: 'A',
        link: link
    };
};

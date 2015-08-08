module.exports = function () {
    return function (path, type, w, h) {
        var url = '//static.strm.pl/';

        if (w && h) {
            url += w + 'x' + h + '/';
        }

        url += type + '/' + path;

        return url;
    };
};

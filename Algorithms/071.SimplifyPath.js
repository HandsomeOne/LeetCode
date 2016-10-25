/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var s = path.slice(1).split('/');
    var p = 0;
    while (p < s.length) {
        switch (s[p]) {
            case '':
            case '.':
                s.splice(p, 1);
                break;
            case '..':
                if (p) {
                    s.splice(p - 1, 2);
                    p--;
                } else {
                    s.splice(p, 1);
                }
                break;
            default:
                p++;
        }
    }
    return '/' + s.join('/');
};

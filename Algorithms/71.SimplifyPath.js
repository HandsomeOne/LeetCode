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
                p ? s.splice(p - 1, 2) : s.splice(p, 1);
                p && p--;
                break;
            default:
                p++;
        }
    }
    return '/' + s.join('/');
};

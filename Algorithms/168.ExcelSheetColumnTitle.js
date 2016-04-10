/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var _1 = 'A'.charCodeAt();
    var title = '';
    while (n) {
        title = String.fromCharCode((n - 1) % 26 + _1) + title;
        n = (n - 1) / 26 | 0;
    }
    return title;
};

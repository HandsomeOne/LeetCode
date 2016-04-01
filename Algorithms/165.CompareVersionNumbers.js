/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var a1 = version1.split('.'), a2 = version2.split('.');
    for (var i = 0, l = Math.max(a1.length, a2.length); i < l; i++) {
        if (+(a1[i] || 0) !== +(a2[i] || 0)) {
            return Math.sign((a1[i] || 0) - (a2[i] || 0));
        }
    }
    return 0;
};

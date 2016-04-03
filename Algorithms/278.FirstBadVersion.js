/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var lastGood = 0, firstBad = n;
        while (firstBad - lastGood > 1) {
            var x = (firstBad + lastGood) / 2 | 0;
            isBadVersion(x) ? firstBad = x : lastGood = x;
        }
        return firstBad;
    };
};

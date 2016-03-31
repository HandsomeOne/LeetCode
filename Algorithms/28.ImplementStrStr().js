/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) {
        return 0;
    }
    var l = needle.length;
    for (var i = 0, s = haystack.length - l; i <= s; i++) {
        var isPart = true;
        for (var j = 0; j < l; j++) {
            if (haystack[i + j] !== needle[j]) {
                isPart = false;
                break;
            }
        }
        if (isPart) {
            return i;
        }
    }
    return -1;
};

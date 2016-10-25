/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var start = 0, end = 0, maxLength = 0;
    while (end < s.length) {
        end++;
        for (var i = end - 2; i >= start; i--) {
            if (s[i] === s[end - 1]) {
                start = i + 1;
                break;
            }
        }
        maxLength = Math.max(end - start, maxLength);
    }
    return maxLength;
};

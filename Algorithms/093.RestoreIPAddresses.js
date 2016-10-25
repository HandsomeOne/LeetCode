/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    var result = [];
    function restoreTheRest(restored, left, index) {
        if (left === 0) {
            if (index === s.length) {
                result.push(restored.join('.'));
            }
            return;
        }
        for (var j = 1; j <= 3 && j <= s.length - index - left + 1; j++) {
            var ip = s.substr(index, j);
            if (ip[0] === '0' && ip.length > 1) {
                return;
            }
            if (0 <= ip && ip < 256) {
                restoreTheRest(restored.concat([ip]), left - 1, index + j);
            }
        }
    }
    restoreTheRest([], 4, 0);
    return result;
};

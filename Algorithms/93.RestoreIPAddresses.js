/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    var result = [];
    function restoreTheRest(restored, i, rest) {
        if (i === 0) {
            if (rest.length === 0) {
                result.push(restored.join('.'));
            }
            return;
        }
        for (var j = 1; j <= 3 && j <= rest.length - (i - 1); j++) {
            var ip = rest.slice(0, j);
            if (ip[0] === '0' && ip.length > 1) {
                return;
            }
            if (0 <= ip && ip < 256) {
                restoreTheRest(restored.concat([ip]), i - 1, rest.slice(j));
            }
        }
    }
    restoreTheRest([], 4, s);
    return result;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var start = 0, end = 0;
    var minStart = -Infinity, minEnd = Infinity;
    var toCover = t.length;
    var tMap = {}, covered = {};
    for (var i = 0; i < toCover; i++) {
        tMap[t[i]] = tMap[t[i]] ? tMap[t[i]] + 1 : 1;
    }
    while (true) {
        while (toCover) {
            if (end === s.length) {
                return minEnd === Infinity ? '' : s.substring(minStart, minEnd);
            }
            end++;
            var char = s[end - 1];
            if (char in tMap) {
                covered[char] = covered[char] ? covered[char] + 1 : 1;
                if (covered[char] <= tMap[char]) {
                    toCover--;
                }
            }
        }
        if (end - start < minEnd - minStart) {
            minStart = start;
            minEnd = end;
        }

        if (s[start] in tMap) {
            if (covered[s[start]] <= tMap[s[start]]) {
                toCover++;
            }
            covered[s[start]]--;
        }
        start++;
    }
};

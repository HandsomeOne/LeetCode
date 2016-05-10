/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort(function(a, b) {
        return a - b;
    });
    var result = [];
    function combineTheRest(combined, sum, rest) {
        if (sum === target) {
            result.push(combined);
            return;
        }
        if (rest.length === 0) {
            return;
        }
        for (var i = 0; sum + i * rest[0] <= target; i++) {
            combineTheRest(
                combined.concat(new Array(i).fill(rest[0])),
                sum + i * rest[0],
                rest.slice(1));
        }
    }
    combineTheRest([], 0, candidates);
    return result;
};

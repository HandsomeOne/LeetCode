/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    var result = [];
    function combineTheRest(combined, sum, index) {
        if (sum === target) {
            result.push(combined);
            return;
        }
        if (sum > target || index === candidates.length) {
            return;
        }
        var num = candidates[index];
        for (var i = 0; sum + i * num <= target; i++) {
            combineTheRest(
                combined.concat(new Array(i).fill(num)),
                sum + i * num,
                index + 1);
        }
    }
    combineTheRest([], 0, 0);
    return result;
};

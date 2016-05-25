/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var map = {};
    candidates.filter(num => num <= target).forEach(num => {
        map[num] = num in map ? map[num] + 1 : 1;
    });
    var keys = Object.keys(map).map(parseFloat).sort((a, b) => a - b);
    var result = [];
    function combineTheRest(combined, sum, index) {
        if (sum === target) {
            result.push(combined);
            return;
        }
        if (sum > target || index === keys.length) {
            return;
        }
        var num = keys[index];
        for (var j = 0; j <= map[num]; j++) {
            combineTheRest(
                combined.concat(new Array(j).fill(num)),
                sum + j * num,
                index + 1);
        }
    }
    combineTheRest([], 0, 0);
    return result;
};

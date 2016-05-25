/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var map = {};
    nums.forEach(num => {
        map[num] = num in map ? map[num] + 1 : 1;
    });
    var keys = Object.keys(map).map(parseFloat).sort((a, b) => a - b);
    var subsets = [];
    function selectTheRest(selected, index) {
        if (index === keys.length) {
            subsets.push(selected);
            return;
        }
        for (var j = 0; j <= map[keys[index]]; j++) {
            selectTheRest(selected.concat(new Array(j).fill(keys[index])), index + 1);
        }
    }
    selectTheRest([], 0);
    return subsets;
};

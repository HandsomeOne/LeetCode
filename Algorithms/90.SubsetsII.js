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
    function selectTheRest(selected, rest) {
        if (rest.length === 0) {
            subsets.push(selected);
            return;
        }
        for (var j = 0; j <= map[rest[0]]; j++) {
            selectTheRest(selected.concat(new Array(j).fill(+rest[0])), rest.slice(1));
        }
    }
    selectTheRest([], keys);
    return subsets;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var map = {};
    nums.forEach(num => {
        map[num] = num in map ? map[num] + 1 : 1;
    });
    var result = Object.keys(map).map(v => +v);
    result.sort((a, b) => map[b] - map[a]);
    return result.slice(0, k);
};

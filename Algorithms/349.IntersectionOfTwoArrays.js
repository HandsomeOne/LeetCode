/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var set1 = {}, set2 = {};
    nums1.forEach(num => { set1[num] = true; });
    nums2.forEach(num => { set2[num] = true; });
    return Object.keys(set1).filter(key => key in set2).map(key => +key);
};

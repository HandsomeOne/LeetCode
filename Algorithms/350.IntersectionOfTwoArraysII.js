/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    var intersection = [];
    for (var i = nums1.length - 1, j = nums2.length - 1; i >= 0 && j >= 0; i--) {
        while (nums2[j] > nums1[i]) {
            j--;
        }
        if (nums2[j] === nums1[i]) {
            intersection.push(nums1[i]);
            j--;
        }
    }
    return intersection;
};

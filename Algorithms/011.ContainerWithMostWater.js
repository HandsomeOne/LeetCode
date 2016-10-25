/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var start = 0, end = height.length - 1;
    var max = 0;
    while (start < end) {
        var area;
        if (height[start] < height[end]) {
            area = height[start] * (end - start);
            start += 1;
        } else {
            area = height[end] * (end - start);
            end -= 1;
        }
        max = Math.max(max, area);
    }
    return max;
};

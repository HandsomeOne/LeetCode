/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    function weirdCompare(a, b) {
        var la = a.length, lb = b.length;
        if (la < lb) {
            if (a === b.slice(0, la)) {
                return weirdCompare(a, b.slice(la));
            } else {
                return b.slice(0, la) - a;
            }
        } else if (la === lb) {
            return b - a;
        } else {
            if (a.slice(0, lb) === b) {
                return weirdCompare(a.slice(lb), b);
            } else {
                return b - a.slice(0, lb);
            }
        }
    }
    var result = nums.map(num => '' + num).sort(weirdCompare).join('');
    if (+result === 0) {
        return '0';
    }
    return result;
};

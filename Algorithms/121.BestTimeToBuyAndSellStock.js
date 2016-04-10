/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices.length) {
        return 0;
    }
    var max = 0;
    var lowest = prices[0];
    for (var i = 1, l = prices.length; i < l; i++) {
        if (prices[i] < lowest) {
            lowest = prices[i];
        } else {
            max = Math.max(max, prices[i] - lowest);
        }
    }
    return max;
};

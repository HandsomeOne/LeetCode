/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var max = 0;
    for (var i = 1, l = prices.length; i < l; i++) {
        if (prices[i] > prices[i - 1]) {
            max += prices[i] - prices[i - 1];
        }
    }
    return max;
};

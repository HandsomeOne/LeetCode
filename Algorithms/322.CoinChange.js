/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var a = [0];
    for (var i = 1; i <= amount; i++) {
        a[i] = Infinity;
    }
    coins.forEach(coin => {
        for (var k = 1; k <= amount; k++) {
            a[k] = Math.min(a[k], 1 + (k >= coin ? a[k - coin] : Infinity));
        }
    });
    return a[amount] === Infinity ? -1 : a[amount];
};

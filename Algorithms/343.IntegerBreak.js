/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    switch (n) {
        case 2:
            return 1;
        case 3:
            return 2;
        default:
            var k = n / 3 | 0;
            switch (n % 3) {
                case 0:
                    return Math.pow(3, k);
                case 1:
                    return Math.pow(3, k - 1) * 4;
                case 2:
                    return Math.pow(3, k) * 2;
            }
    }
};

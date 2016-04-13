/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) {
        return [];
    }
    function crossJoin(a, b) {
        var product = [];
        for (var i in a) {
            for (var j in b) {
                product.push(a[i] + b[j]);
            }
        }
        return product;
    }
    var map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };
    var combinations = [''];
    while (digits) {
        combinations = crossJoin(combinations, map[digits[0]]);
        digits = digits.slice(1);
    }
    return combinations;
};

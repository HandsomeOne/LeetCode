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
        for (var x of a) {
            for (var y of b) {
                product.push(x + y);
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

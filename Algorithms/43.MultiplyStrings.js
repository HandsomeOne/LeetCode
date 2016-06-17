/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }
    const splittedNum1 = [], splittedNum2 = [], p = [];
    for (let i = num1.length; i > 0; i -= 4) {
        splittedNum1.push(+num1.substring(i - 4, i));
    }
    for (let i = num2.length; i > 0; i -= 4) {
        splittedNum2.push(+num2.substring(i - 4, i));
    }
    splittedNum1.forEach((m, i) => {
        splittedNum2.forEach((n, j) => {
            if (i + j in p) {
                p[i + j].push(m * n);
            } else {
                p[i + j] = [m * n];
            }
        });
    });
    let result = '', carry = 0;
    for (let a of p) {
        let sum = a.reduce((x, y) => x + y, 0) + carry;
        let indice = '' + sum % 10000;
        indice = '0'.repeat(4 - indice.length) + indice;
        result = indice + result;
        carry = sum / 10000 | 0;
    }
    if (carry) {
        result = carry + result;
    }
    return result.replace(/^0+/, '');
};

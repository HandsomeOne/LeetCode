/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.match(/[\+\-\*\/]|\d+/g);
    s.push('+', '0');
    var stack = [+s[0]];
    var a, b;
    for (var i = 1, l = s.length; i < l; i += 2) {
        switch (s[i]) {
            case '+':
            case '-':
                if (stack.length > 1) {
                    b = stack.pop();
                    var p = stack.pop();
                    a = stack.pop();
                    stack.push(p === '+' ? a + b : a - b);
                }
                stack.push(s[i], +s[i + 1]);
                break;
            case '*':
            case '/':
                a = stack.pop();
                b = +s[i + 1];
                stack.push(s[i] === '*' ? a * b : a / b | 0);
        }
    }
    return stack[0];
};

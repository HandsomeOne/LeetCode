/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.replace(/ /g, '');
    var a = [], stack = [a];
    for (var i = 0, l = s.length; i < l; i++) {
        var p = stack[stack.length - 1];
        switch (s[i]) {
            case '+':
            case '-':
                p.push(s[i]);
                break;
            case '(':
                var t = [];
                stack.push(t);
                p.push(t);
                break;
            case ')':
                stack.pop();
                break;
            default:
                var j = i + 1;
                while (/\d/.test(s[j])) {
                    j++;
                }
                p.push(+s.substring(i, j));
                i = j - 1;
        }
    }
    return (function calc(duck) {
        if (typeof duck === 'number') {
            return duck;
        }
        var result = calc(duck[0]);
        for (var i = 1, l = duck.length; i < l; i += 2) {
            if (duck[i] === '+') {
                result += calc(duck[i + 1]);
            } else if (duck[i] === '-') {
                result -= calc(duck[i + 1]);
            }
        }
        return result;
    })(a);
};

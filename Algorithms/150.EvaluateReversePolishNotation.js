/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var stack = [];
    for (var i = 0, l = tokens.length; i < l; i++) {
        if ('+-*/'.indexOf(tokens[i]) > -1) {
            var b = stack.pop();
            var a = stack.pop();
            switch (tokens[i]) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(a / b | 0);
                    break;
            }
        } else {
            stack.push(+tokens[i]);
        }
    }
    return stack[0];
};

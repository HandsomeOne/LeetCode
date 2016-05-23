/**
 * @constructor
 */
var Stack = function() {
    this.stack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    var t = [];
    while (this.stack.length) {
        t.push(this.stack.shift());
    }
    this.stack.push(x);
    while (t.length) {
        this.stack.push(t.shift());
    }
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    this.stack.shift();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return this.stack[0];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return this.stack.length === 0;
};

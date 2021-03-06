/**
 * @constructor
 */
var Queue = function() {
    this.queue = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    var t = [];
    while (this.queue.length) {
        t.unshift(this.queue.shift());
    }
    this.queue.unshift(x);
    while (t.length) {
        this.queue.unshift(t.shift());
    }
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    this.queue.shift();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    return this.queue[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.queue.length === 0;
};

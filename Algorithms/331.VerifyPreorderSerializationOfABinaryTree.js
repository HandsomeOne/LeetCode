/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    var nodes = preorder.split(',');
    if (nodes.length % 2 === 0) {
        return false;
    }
    function notHash(s) {
        return s !== '#';
    }
    var a = nodes.splice(0, 1);
    while (nodes.length) {
        var levelSize = a.filter(notHash).length;
        if (levelSize === 0 || nodes.length < 2 * levelSize) {
            return false;
        }
        a = nodes.splice(0, 2 * levelSize);
    }
    return !a.some(notHash);
};

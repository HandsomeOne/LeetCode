/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    var lines = [];
    while (words.length) {
        var l = words[0].length;
        var w = [words.shift()];
        while (words.length && l + words[0].length + 1 <= maxWidth) {
            l += words[0].length + 1;
            w.push(words.shift());
        }
        if (words.length) {
            if (w.length > 1) {
                var i = 0;
                while (l < maxWidth) {
                    w[i] += ' ';
                    l++;
                    i++;
                    i %= (w.length - 1);
                }
            }
        }
        var line = w.join(' ');
        while (line.length < maxWidth) {
            line += ' ';
        }
        lines.push(line);
    }
    return lines;
};

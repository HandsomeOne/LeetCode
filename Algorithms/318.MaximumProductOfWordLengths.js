/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    var nums = words.map(word => {
        var num = 0;
        for (var i = 0; i < 26; i++) {
            num <<= 1;
            var letter = String.fromCharCode('a'.charCodeAt() + i);
            if (word.indexOf(letter) >= 0) {
                num += 1;
            }
        }
        return num;
    });
    var max = 0;
    for (var i = 0, l = words.length; i < l; i++) {
        for (var j = i + 1; j < l; j++) {
            if ((nums[i] & nums[j]) === 0) {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }
    return max;
};

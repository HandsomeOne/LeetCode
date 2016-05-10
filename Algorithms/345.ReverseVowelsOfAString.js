/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    function isVowel(s) {
        switch (s.toLowerCase()) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                return true;
            default:
                return false;
        }
    }
    var a = s.split(''), l = a.length;
    var i = 0, j = l - 1;
    while (i < j) {
        if (isVowel(a[i])) {
            while (i < j) {
                if (isVowel(a[j])) {
                    var t = a[i];
                    a[i] = a[j];
                    a[j] = t;
                    j--;
                    break;
                }
                j--;
            }
        }
        i++;
    }
    return a.join('');
};

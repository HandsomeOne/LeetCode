/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var bull = 0, cow = 0;
    var secretPile = {}; guessPile = {};
    for (var i = 0, l = secret.length; i < l; i++) {
        if (secret[i] === guess[i]) {
            bull += 1;
        } else {
            if (secretPile[secret[i]] === undefined) {
                secretPile[secret[i]] = 0;
            }
            if (guessPile[secret[i]] > 0) {
                cow += 1;
                guessPile[secret[i]] -= 1;
            } else {
                secretPile[secret[i]] += 1;
            }
            if (guessPile[guess[i]] === undefined) {
                guessPile[guess[i]] = 0;
            }
            if (secretPile[guess[i]] > 0) {
                cow += 1;
                secretPile[guess[i]] -= 1;
            } else {
                guessPile[guess[i]] += 1;
            }
        }
    }
    return bull + 'A' + cow + 'B';
};

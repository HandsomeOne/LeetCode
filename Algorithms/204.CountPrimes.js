/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n < 3) {
        return 0;
    }
    if (n === 3) {
        return 1;
    }
    function isPrime(n) {
        for (var j = 1, sqrt = Math.sqrt(n) | 0; primes[j] <= sqrt; j++) {
            if (n % primes[j] === 0) {
                return false;
            }
        }
        return true;
    }
    var primes = [2, 3];
    for (var i = 5; i < n; i += 2) {
        if (isPrime(i))
            primes.push(i);
    }
    return primes.length;
};

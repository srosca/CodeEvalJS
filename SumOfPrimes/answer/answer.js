/**
 * Determine whether a variable is an integer.
 * @param {mixed} n The variable to test.
 * @returns {boolean}
 * @public
 */
var isInteger = function (n) {

    return (
        Object.prototype.toString.call(n) === '[object Number]' &&
        n % 1 === 0 &&
        isNaN(n) === false
        );
};

/**
 * Determine if n is a prime number
 * @param {integer} n The integer to test
 * @returns {boolean}
 * @public
 */
var isPrime = function (n) {
    if (!isInteger(n) || !isFinite(n) || n % 1 || n < 2) {
        return false;
    }
    if (n % 2 === 0) {
        return n === 2;
    }
    var m = Math.sqrt(n);
    for (var i = 3; i <= m; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

/**
 * Get the sum of the first 1000 prime numbers
 */

var sumOfPrimes = function (limit) {
    var i= 0,
        sum = 0,
        count = 0;
    while(count < limit){
        if (isPrime(i)) {
            sum += i;
            count++;
        }
        i++;
    }
    return sum;
};

console.log(sumOfPrimes(1000));
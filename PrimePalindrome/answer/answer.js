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
 * Determine if n is a palindrome number
 * @param {integer} n The integer to test
 * @returns {boolean}
 */
var isPalindrome = function (n) {
    if (!isInteger(n) || !isFinite(n) ) {
        return false;
    }
    var reverse = n.toString().split('').reverse().join('');
    return reverse === n.toString();

};

var primePalindrome = function(limit){
    var i;

    for (i = limit; i > 0; i--){
        if (isPalindrome(i) && isPrime(i)){
            break;
        }
    }
    return i;

};

console.log(primePalindrome(1000));
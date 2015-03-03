/**
 * Sum of Primes Module
 */
(function () {

    'use strict';

    var util = require('./util.js');

    var sumOfPrimes = function (limit) {
        var i= 0,
            sum = 0,
            count = 0;
        while(count < limit){
            if (util.isPrime(i)) {
                sum += i;
                count++;
            }
            i++;
        }
        return sum;
    };

    module.exports = sumOfPrimes;

})();
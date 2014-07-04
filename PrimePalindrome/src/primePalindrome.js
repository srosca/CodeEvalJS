/**
 * Prime Palindrome Module
 */
(function () {

    'use strict';

    var util = require('./util.js');


    var primePalindrome = function(limit){
        var i;

        for (i = limit; i > 0; i--){
            if (util.isPalindrome(i) && util.isPrime(i)){
                break;
            }
        }
        return i;

    };

    module.exports = primePalindrome;

})();
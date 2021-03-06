/**
 * Fizz Buzz Module
 */
(function () {

    'use strict';

    var fizzbuzz = function(A, B, n){
        var i,
            response = '';

        for (i = 1; i <= n; i++) {
            if (i % A === 0 && i % B === 0){
                response += 'FB';
            }else if  (i % A === 0) {
                response += 'F';
            } else if (i % B === 0) {
                response += 'B';
            } else {
                response += i;
            }
            response += ' ';
        }

        // Remove the last space
        response = response.slice(0, - 1);

        return response;
    };

    module.exports = fizzbuzz;

})();
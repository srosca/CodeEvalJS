
/**
 * Unit Test For the fizz buzz module
 */
(function () {

    'use strict';

    var test = require('../../src/sumOfPrimes.js');

    describe('unit test', function () {

        it('Check', function () {
            expect(test(1000)).toEqual(3682913);
        });
    });

})();

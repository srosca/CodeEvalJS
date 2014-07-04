
/**
 * Unit Test For the fizz buzz module
 */
(function () {

    'use strict';

    var test = require('../../src/primePalindrome.js');

    describe('unit test', function () {

        it('Check', function () {

            expect(test(2)).toEqual(2);
            expect(test(11)).toEqual(11);
            expect(test(15)).toEqual(11);
            expect(test(20)).toEqual(11);
            expect(test(190)).toEqual(181);
            expect(test(1000)).toEqual(929);

        });
    });

})();

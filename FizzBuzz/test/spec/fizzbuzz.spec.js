
/**
 * Unit Test For the fizz buzz module
 */
(function () {

    'use strict';

    var test = require('../../src/fizzbuzz.js');

    describe('unit test', function () {

        it('Check', function () {

            expect(test(3, 5, 10)).toEqual('1 2 F 4 B F 7 8 F B');
            expect(test(2, 7, 15)).toEqual('1 F 3 F 5 F B F 9 F 11 F 13 FB 15');

        });
    });
})();

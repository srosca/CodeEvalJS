/**
 * Test for the util module.
 */
(function () {

    'use strict';

    var util = require('../../src/util.js');


    describe('isInteger', function () {

        it('Should return false for non-integers', function () {

            expect(util.isInteger(undefined)).toBeFalsy();
            expect(util.isInteger(null)).toBeFalsy();
            expect(util.isInteger(true)).toBeFalsy();
            expect(util.isInteger(false)).toBeFalsy();
            expect(util.isInteger(new Error())).toBeFalsy();
            expect(util.isInteger([])).toBeFalsy();
            expect(util.isInteger({})).toBeFalsy();
            expect(util.isInteger(0.01)).toBeFalsy();
            expect(util.isInteger(Math.PI)).toBeFalsy();
        });

        it('Should return true for integers', function () {

            expect(util.isInteger(0)).toBeTruthy();
            expect(util.isInteger(-1)).toBeTruthy();
            expect(util.isInteger(1)).toBeTruthy();
            expect(util.isInteger(1024)).toBeTruthy();
            expect(util.isInteger(-104)).toBeTruthy();
        });
    });


    describe('isPrime', function () {

        it('Should return false for non-integers', function () {

            expect(util.isPrime(undefined)).toBeFalsy();
            expect(util.isPrime(null)).toBeFalsy();
            expect(util.isPrime(true)).toBeFalsy();
            expect(util.isPrime(false)).toBeFalsy();
            expect(util.isPrime(new Error())).toBeFalsy();
            expect(util.isPrime([])).toBeFalsy();
            expect(util.isPrime({})).toBeFalsy();
            expect(util.isPrime(0.01)).toBeFalsy();
            expect(util.isPrime(Math.PI)).toBeFalsy();
        });


        it('Should return false for non-prime numbers', function () {

            expect(util.isPrime(4)).toBeFalsy();
            expect(util.isPrime(6)).toBeFalsy();
            expect(util.isPrime(8)).toBeFalsy();
            expect(util.isPrime(9)).toBeFalsy();
            expect(util.isPrime(10)).toBeFalsy();
            expect(util.isPrime(12)).toBeFalsy();
            expect(util.isPrime(14)).toBeFalsy();
            expect(util.isPrime(15)).toBeFalsy();
            expect(util.isPrime(16)).toBeFalsy();
            expect(util.isPrime(40)).toBeFalsy();
            expect(util.isPrime(42)).toBeFalsy();
            expect(util.isPrime(82)).toBeFalsy();
            expect(util.isPrime(84)).toBeFalsy();
            expect(util.isPrime(4788)).toBeFalsy();
            expect(util.isPrime(7874)).toBeFalsy();
            expect(util.isPrime(7875)).toBeFalsy();
            expect(util.isPrime(7876)).toBeFalsy();

        });

        it('Should return true for prime numbers', function () {

            expect(util.isPrime(2)).toBeTruthy();
            expect(util.isPrime(3)).toBeTruthy();
            expect(util.isPrime(5)).toBeTruthy();
            expect(util.isPrime(7)).toBeTruthy();
            expect(util.isPrime(11)).toBeTruthy();
            expect(util.isPrime(13)).toBeTruthy();
            expect(util.isPrime(17)).toBeTruthy();
            expect(util.isPrime(41)).toBeTruthy();
            expect(util.isPrime(83)).toBeTruthy();
            expect(util.isPrime(103)).toBeTruthy();
            expect(util.isPrime(4789)).toBeTruthy();
            expect(util.isPrime(7873)).toBeTruthy();
            expect(util.isPrime(7877)).toBeTruthy();

        });
    });

    
})();

var test = require('../../src/sumOfPrimes.js');

module.exports = {

    name: 'Performance tests',
    tests: {
        'test 1': function() {
            test(500);
        },
        'test 1000': function() {
            test(1000)
        }
    }
};

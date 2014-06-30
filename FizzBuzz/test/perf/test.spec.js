var test = require('../../src/fizzbuzz.js');

module.exports = {

    name: 'Performance tests',
    tests: {
        'test 3, 5, 10': function() {
            test(3, 5, 10);
        },
        'test 2, 7, 15': function() {
            test(2, 7, 15)
        }
    }
};

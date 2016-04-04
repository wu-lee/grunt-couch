'use strict';

var grunt = require('grunt');

exports.deepEqual = function(test) {

    var actual = {
    _id: "configuration",
    foo: {
        bah: {
            title: 'Bah',
            list: ['Uno', 'Duo']
        },
    },
};
    var actual2 = {
    _id: "configuration",
    foo: {
        bah: {
            title: 'Bah',
            list: {0:'Uno', 1:'Duo'}
        },
    },
};
    var expected =     {
      "_id": "configuration",
      "foo": {
        "bah": {
          "title": "Bah",
          "list": [
            "Uno",
            "Duo"
          ]
        }
      }
    };


    test.deepEqual(actual2, expected, 'should not be equal.');
    test.deepEqual([], {}, 'should not be equal.');
    test.deepEqual(['a','b'], {0:'a', 1:'b'}, 'should not be equal.');

    test.done();
};

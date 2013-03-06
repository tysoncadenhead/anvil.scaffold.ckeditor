/*global describe, it */
/*jslint node: true */

var assert = require('assert'),
    plugin = require('../src/{{path}}/plugins/{{name}}/plugin');

// Mocha test for {{name}}
(function () {

    'use strict';

    describe('Test suite for the {{name}} CKEditor plugin', function () {

        describe('init()', function () {

            it('Should return undefined', function () {
                assert.equal(plugin.init(), undefined);
            });

        });

    });

}());
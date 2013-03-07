/*global describe, it */
/*jslint node: true */

// Mocha test for {{name}}
(function () {

    'use strict';

    global.CKEDITOR = {
        plugins: {
            add: function () {}
        }
    };

    var assert = require('assert'),
        plugin = require('../src/{{path}}/plugins/{{name}}/plugin');

    describe('Test suite for the {{name}} CKEditor plugin', function () {

        describe('init()', function () {

            it('Should return undefined', function () {
                assert.equal(plugin.init({
                    addCommand: function () {},
                    ui: {
                        addButton: function () {}
                    }
                }), undefined);
            });

        });

        describe('on()', function () {

            it('Should remove the cke_button_off class', function () {
                plugin.$button = {
                    removeClass: function (cls) {
                        assert.equal(cls, 'cke_button_off');
                    }
                };
                plugin.on();
            });

        });

        describe('off()', function () {

            it('Should add the cke_button_off class', function () {
                plugin.$button = {
                    addClass: function (cls) {
                        assert.equal(cls, 'cke_button_off');
                    }
                };
                plugin.off();
            });

        });

    });

}());
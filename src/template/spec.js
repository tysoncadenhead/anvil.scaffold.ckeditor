/*global describe, it, beforeEach, after, webdriver, assert, module, $, paginationPlugin */
/*jslint plusplus: true */

module.exports = function (driver, callback) {

    'use strict';

    describe('{{path}}/plugins/{{name}}/plugin.js', function() {

        after(function (done) {
            callback();
            done();
        });

        driver.get('http://localhost:9876/{{path}}/plugins/{{name}}/index.html');

        describe('init()', function () {

            it('Should initialize the test', function () {

            });

        });

    });

};
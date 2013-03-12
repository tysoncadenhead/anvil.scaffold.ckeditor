/*global describe, it, before, after, expect */
/*jslint node: true */

// Mocha test for pagination
(function () {

    'use strict';

    var test = require('../spec/test')({
            functional: false,
            file: '../src/{{path}}/plugins/{{name}}/index.html'
        });

    describe('{{path}}/plugins/{{name}}/plugin.js', function() {

        before(test.before);
     
        describe('init()', function(){
            it('Should initialize the plugin', function () {

            });
        });

        describe('on()', function(){
            it('Should turn the plugin on', function(done) {
                done();
            });
        });

        describe('off()', function(){
            it('Should turn the plugin off', function(done) {
                done();
            });
        });
     
        after(test.after);

    });

}());
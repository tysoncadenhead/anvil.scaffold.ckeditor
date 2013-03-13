/*jslint node: true, plusplus: true */
/*global it, describe, before, beforeEach, client, webclient, expect, after */

(function () {

    'use strict';

    var test = require('../spec/test')({
            functional: false,
            file: '../src/{{path}}/plugins/{{name}}/index.html'
        });

    describe('{{path}}/plugins/{{name}}/plugin.js', function() {

        before(test.before);
     
        describe('init()', function(){
            it('Should initialize the test', function () {

            });
        });
        
        after(test.after);

    });

}());
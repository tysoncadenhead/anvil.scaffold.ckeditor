/*jslint node: true */

module.exports = function (obj) {

    'use strict';

    var server = require('../src/server'),
        build = require("../build.json"),
        _ = require('underscore'),
        chai = require('chai'), client;

    if (obj.functional) {
        client = require('webdriverjs').remote({
            logLevel: 'silent',
            desiredCapabilities: {
                browserName: 'phantomjs'
            }
        });
    }

    global = _.extend(global, {
        webclient: require('webdriverjs'),
        client: client,
        expect: chai.expect
    });

    return _.extend(chai, {

        file: obj.file,

        before: function (done) {
            this.timeout(500000);
            if (obj.functional) {
                client.init().url('http://localhost:' + build.port + '/' + this.file, done);
            } else {
                done();
            }
        },

        after: function (done) {
            if (obj.functional) {
                client.end();
            }
            done();
        }

    });

};
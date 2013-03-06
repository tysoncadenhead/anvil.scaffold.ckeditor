/*jslint node:true */

var path = require( "path" ),
    root = path.resolve( __dirname, "../lib/template/" ) + "/";

module.exports = function (_, anvil) {

    'use strict';

    return anvil.plugin({

        type: 'ckeditor',
        description: 'Creates a new CKEditor plugin',
        
        prompt: [{
            name: 'name',
            description: 'The name of your plugin',
            required: true
        }, {
            name: 'path',
            description: 'Where is CKEditor installed? (IE: js/ckeditor)',
            required: true
        }],

        output: {
            'src/{{path}}/plugins/{{name}}': {
                'plugin.html': anvil.scaffold.file(root + '/plugin.html'),
                'plugin.js': anvil.scaffold.file(root + '/plugin.js'),
                'images/icon.png': anvil.scaffold.file(root + '/plugin.png')
            },
            'spec': {
                'ckeditor.{{name}}.spec.js': anvil.scaffold.file(root + '/spec.js')
            }
        }

    });
};
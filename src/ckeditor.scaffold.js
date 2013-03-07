/*jslint node:true */

var path = require( "path" ),
    root = path.resolve( __dirname, "../lib/template/" ) + "/";

module.exports = function (_, anvil) {

    'use strict';

    anvil.scaffold({

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

        data: {
            src: anvil.config.source,
            spec: anvil.config.spec
        },

        output: {
            '{{src}}/{{path}}/plugins/{{name}}': {
                'plugin.html': anvil.scaffold.file(root + '/plugin.html'),
                'plugin.js': anvil.scaffold.file(root + '/plugin.js'),
                'images': {
                    'icon.png': anvil.scaffold.file(root + '/empty')
                }
            },
            '{{spec}}': {
                'ckeditor.{{name}}.spec.js': anvil.scaffold.file(root + '/spec.js')
            }
        }

    });
};
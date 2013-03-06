/*jslint plusplus: true */
/*global CKEDITOR */

var customPlugins = customPlugins || {};

customPlugins['{{name}}'] = (function () {

    'use strict';

    var plugin = {

        init: function (editor) {

            // Adds the command to toggle the pagination
            editor.addCommand('toggle{{name}}', {

                exec : function(editor) {
                }

            });

            // The UI Button for pagination
            editor.ui.addButton('{{name}}', {
                label: '{{name}}',
                command: 'toggle{{name}}',
                icon: this.path + 'images/icon.png'
            });

        }

    };

    // Create the {{name}} plugin
    CKEDITOR.plugins.add('{{name}}', plugin);

    // Return the plugin object so it can be properly tested
    return plugin;

}());
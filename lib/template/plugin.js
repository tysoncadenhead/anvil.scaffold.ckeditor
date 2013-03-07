/*jslint plusplus: true */
/*global CKEDITOR */

var module = module || {};
module.exports = (function () {

    'use strict';

    var plugin = {

        /**
        * @function
        * @description Turn the {{name}} plugin on
        * @param {Object} editor The CKEditor editor object
        */
        on: function (editor) {
            this.$button.removeClass('cke_button_off');
        },

        /**
        * @function
        * @description Turn the {{name}} plugin off
        * @param {Object} editor The CKEditor editor object
        */
        off: function (editor) {
            this.$button.addClass('cke_button_off');
        },

        /**
        * @function
        * @description Initializes the {{name}} plugin
        * @param {Object} editor The CKEditor editor object
        */
        init: function (editor) {

            var self = this;

            // Adds the command to toggle the pagination
            editor.addCommand('toggle{{name}}', {

                exec : function(editor) {
                    
                    self.$button = $('.cke_button__{{name}}');

                    // Toggle on
                    if (self.$button.hasClass('cke_button_off')) {
                        self.on(editor);

                    // Toggle off
                    } else {
                        self.off(editor);
                    }

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
# anvil.scaffold.ckeditor

This repository generates [Anvil](https://github.com/anviljs/anvil.js) scaffolds for CKEditor plugin creation.

To install these scaffolds, run:

```bash
anvil install anvil.scaffold.ckeditor
```

Once it is installed, you'll be able to run:

* `anvil gen ckeditor` adds a new CKEditor plugin

The plugin will prompt you for the path where you have CKEditor installed and the name you want to give your plugin.

The plugin will be available at /src/<your-path-to-aloha>/ckeditor/plugins/<plugin-name>

The scaffolding will also generate a Mocha test suite for your plugin at /spec/ckeditor.<plugin-name>.spec.js
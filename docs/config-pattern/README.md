# @borealisgroup/config-pattern

Configuration pattern 

## Usage

You can choose to export different constant values depending on the environment (development, test or production):

```js
export const USER_NAME = dev ? 'developer' : 'visitor';
```

## Why

It's generally a bad practice to define constants in your business logic. For more flexibility, config files can be used to export all the constants:

- shared constants: used by multiple modules, it should be stored in the `config` folder.
- local constants: used by only one module, it should be stored in the module using it `moduleName/moduleName.config.js`.

### Project Structure

```bash
├── config
│   └── form.config.js              # constants used by store/form and components/Form
|   store
|   └── userForm/form.selectors.js
|   └── userForm/form.config.js     # constants used only by store/form files
|   components
|   └── Form
|   |   └── Form.config.js          # constants used only by components/Form files
```

Note that the constants should be stored in multiple config files following the separation of concern principle.
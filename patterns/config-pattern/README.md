# @borealisgroup/config-pattern

Configuration pattern 

## Usage

See the [example](example) (TODO: to update)

## Why

It's generally a bad practice to define constants in your business logic. For more flexibility, config files can be used to export all the constants:

- shared constants: used by multiple modules, it should be stored in the `config` folder.
- local constants: used by only one module, it should be stored in the module using it `moduleName/moduleName.config.js`.

### Project Structure

```bash
├── config
│   └── form.config.js              # constants used store/form and components/Form
|   store
|   └── userForm/form.selectors.js
|   └── userForm/form.config.js     # constants used only by store/form files
|   components
|   └── Form
|   |   └── Form.config.js          # constants used only by components/Form files
```

Note that the constants should be stored in multiple config files following the separation of concern principle.

### Development

You can also choose to export different constant values depending on the environment (development, testing or production):

```js
export let WELCOME_MESSAGE = 'Welcome';

if (process.env.NODE_ENV === 'development') {
  WELCOME_MESSAGE = 'Test'
}
```

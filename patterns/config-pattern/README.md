# @borealisgroup/config-pattern

Configuration pattern 

## Usage

See the [example](example)

## Why

See [dynamic-export](../dynamic-export/README.md#Why).

It's generally a bad practice to define constants in your business logic. All constants should be stored in a `config` folder.

### Project Structure

```bash
├── config
│   ├── index.js
│   ├── config.js
│   ├── config.development.js
│   ├── config.production.js
│   └── slice.config.js
```

- `index.js` - re-export all named export from `config.js`.
- `config.js` - global configuration, re-export dynamically all properties of its `config` object.
- `slice.config.js` - slice of configuration following the separation of concern principle. All slices of configuration are merged in `config.js`.
- `config.development.js` - dev-only configuration, merged in `config.js` if `NODE_ENV === development`.
- `config.production.js` - prod-only configuration, merged in `config.js` if `NODE_ENV === production`.

Note that `config.development.js` is overwriting `config.js`, useful for testing purpose.

# @borealisgroup/i18n-prod

This package is related to [i18n-dev](https://github.com/borealisgroup/borealis/tree/master/packages/@borealisgroup/i18n-dev), it does the same except that it will use local localization files and it is not auto uploading missing keys. It also has a smaller bundle size so it's adviced to use this package for production.

## Prerequisites

- React

## Setup

- Use [i18n-dev](https://github.com/borealisgroup/borealis/tree/master/packages/@borealisgroup/i18n-dev) for development purposes, this setup assumes that you already did the setup steps of i18n-dev.
- Install this package: `npm install @borealisgroup/i18n-prod`
- Install locize-cli as a dev dependency `npm install locize-cli -D`
- Add the following command to the script tag in your `package.json`

```json
"scripts": {
...
	"locize:download": "locize download --project-id <Your locize project id> --ver latest --path ./public/locales"
...
}
```

- Run `npm run locize:download`. This should fetch all the language files and save it in the `public/locales` folder.
- Go to the `src/i18n` folder and create a new component named `I18nProd.jsx` with the following code

```jsx
import React from 'react';
import i18nConfig from '@borealisgroup/i18n-prod';
import { I18nextProvider } from 'react-i18next';

const I18n = ({ children }) => (
  <I18nextProvider i18n={i18nConfig}>{children}</I18nextProvider>
);

export default I18n;
```

- We could now in `src/i18n/index.js` point to this component but we don't want do that manually, paste the following script tags in your `package.json` so that if you run your app in dev you use the dev library and when you build you switch to production mode

```json
"scripts": {
	"build": "npm run i18n:switch-to-prod && rescripts build",
	"start": "npm run i18n:switch-to-dev && rescripts start",
	"i18n:switch-to-dev": "rm \"src/i18n/index.js\" && echo \"export { default as I18n } from './I18nDev';\r\" > \"src/i18n/index.js\"",
    "i18n:switch-to-prod": "rm \"src/i18n/index.js\" && echo \"export { default as I18n } from './I18nProd';\r\" > \"src/i18n/index.js\" && npm run locize:download",
}
```

# @borealisgroup/i18n

# @borealisgroup/i18n-dev

The purpose of this package is an attempt to make the implementation of localization as easy as possible. It exports a config that connects [react-i18next](https://github.com/i18next/react-i18next) with [locize](https://www.locize.io/). The big benefit is that your language keys are automatically uploaded to locize whenever you add or change them in your code editor.

The localization files will come from the cloud, this is something we don't want in production since it will create a single point of failure if we use this package across multiple project so 
**Don't use this package in production mode. Use then the [i18n-prod](https://github.com/borealisgroup/create-bor-app/tree/master/packages/i18n-prod) package**

This package is just a config file so read the [i18next react](https://react.i18next.com/) and [i18n next](https://www.i18next.com/) docs to know all the posibilities

## Prerequisites

- React
  

## Setup

- Register a new project at [locize](https://www.locize.io/), see confluence (ADD LINK) for the credentials.
- Install this package `npm install --save @borealisgroup/i18n-dev`
- Install react-i18next `npm install react-i18next`
- Create the following folder at your root `src/i18n`
- Create a new class in the `src/i18n` folder with the following name: `I18ndev.jsx`. Paste in this file the following code:

```jsx
/* src/i18n/I18ndev.jsx */
import React from 'react';
import i18nConfig from '@borealisgroup/i18n-dev';
import { I18nextProvider } from 'react-i18next';

const I18n = ({ children }) => {
  const i18nOptions = i18nConfig(
    <Your locize project ID>,
    <Your locize API KEY>,
  );
  return <I18nextProvider i18n={i18nOptions}>{children}</I18nextProvider>;
};

export default I18n;
```
- Create an index.js file in the `src/i18n` folder. Paste in this file the following code:


```jsx
export { default as I18n } from './I18nDev';

```
- Now import our new component as a hoc in your App.jsx. Also provide a Suspense hoc with fallback


```jsx
/* App.jsx */
import React, { Suspense } from 'react';
...

import { I18n } from 'i18n';
...

const App = () => (
	...
      <I18n>
        <Suspense fallback={<div />}>
          ...
        </Suspense>
      </I18n>
	...
);

export default App;

```

- To get you translation keys you can use the [useTranslation hook](https://react.i18next.com/latest/usetranslation-hook). It's performant to work with [namespaces](https://www.i18next.com/principles/namespaces).

```jsx
/* code snippet from the example app */
/* ANY React COMPONENT WHICH IS A CHILD OF i18n */
import React from 'react';
...
import { useTranslation } from 'react-i18next';

...

const TodoForm = ({ onSubmit, onChange, value }) => {
  const { t } = useTranslation('TODO'); /* Here the namespace is TODO. */
  return (
    <StyledForm onSubmit={onSubmit}>
      <TextInput
        placeholder={t('FORM.PLACEHOLDER')}
        onChange={onChange}
        value={value}
        labelText={t('FORM.TITLE')}
      />
      <StyledAddButton>{t('FORM.SUBMIT')}</StyledAddButton>
    </StyledForm>
  );
};

...

export default TodoForm;

```

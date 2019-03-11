# @borealisgroup/atomic-design

Complete Atomic Design example for a React app.

## Prerequisites

- react

## Usage

See the [example](example)

## Why

Large applications can quickly become very painful to maintain. Therefore it is useful to apply the popular atomic design to your React app.

### Overview
![images](docs/images/Atomic&#32;Design.png)

### Components

```bash
├── components
│   ├── atoms
│   │   ├── */*.jsx
│   ├── molecules
│   │   ├── common
│   │   │   ├── */*.jsx
│   │   ├── <route>
│   │   │   ├── */*.jsx
│   ├── organisms
│   │   ├── common
│   │   │   ├── */*.jsx
│   │   ├── <route>
│   │   │   ├── */*.jsx
│   ├── templates
│   │   ├── */*.jsx
│   ├── pages
│   │   ├── */*.jsx
│   ├── App.jsx
│   └── index.js
```

The classical atomic design application:

- `/atoms` -  composed of a single HTML tag or third-party component. Should be reused at least once, to avoid redundancy.

- `/molecules` - composed of atoms

- `/organisms` - composed of organisms/molecules/atoms (the most common case)

- `/templates` - layout of pages (with styling) - composed of organisms

- `/pages` - provided to a Route, without any styling - pages are just instances of templates by passing down the needed organisms (Header, Footer, etc.) as props

Now, let's go further by using a hybrid approach: structuring `/molecules` and `/organisms` by **routes**, as they can be large very quick.

- `/organisms/common` - typically for components used by multiple routes, where the reusability pattern is applied
- `/organisms/<route>` - the components used only in this route

Basically, more there is components inside `/common`, more there is reused components, proving that using React in your app was a good choice.

Therefore, the end goal is to add as much components as possible in `/common‌` by extracting duplicate code among all the components. 

Note that `/atoms` is not structured by route as atoms **should** be reused at least once. 

If one folder (i.e. `/common`) gets large, you can one more time **structure by feature** (i.e. `/common/modals`).

This pattern works very good with [dynamic-export](https://github.com/borealisgroup/borealis-js/tree/master/packages/dynamic-export), as you can move the files as many times as you want without any modification in the code. 

### Containers

For separation of concerns, a stateful component should be split into a (stateful) **container component** wrapping a (stateless) **presentational component**.

The container can handle its state, connect to the store and pass down the state and props.

For simplicity, we respect this naming convention:

- container: `FormButton.container.jsx`
- component: `FormButton.jsx`

Where `FormButton.container` is just a wrapper of `FormButton`:

```js
render() {
  return (
    <FormButton {...this.state} {...this.props} />
  )
}
```

Then, you can import the container:
```js
// if stateless:
import { FormButton } from 'components';

// if stateful:
import { FormButton } from 'containers';
```

## Thanks to

- https://github.com/diegohaz/arc/wiki/Atomic-Design
- https://blog.usejournal.com/thinking-about-react-atomically-608c865d2262
- https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
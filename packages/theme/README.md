# @borealisgroup/theme

A default theme configuration complying with the borealis style guides. Multiple brands are supported.

## Prerequisites

- react
- styled-components

## Install

Using npm:

```bash
yarn add @borealisgroup/theme
```

## Usage

Import a borealis brand from this package and pass it to the theme provider of styled components.

```
// App.jsx
import { ThemeProvider } from 'styled-components';
import { borealis } from 'packages/theme/dist/index'; //following imports also work: lat, ecoplast, mtmPlastics, rosier
...
<ThemeProvider theme={borealis}>
  {/* Any child components here has access to the theme */}
</ThemeProvider>
...
```

Any child styled component of the theme provider now has access to the theme properties.

```
import styled from 'styled-components';
const Link = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`;
```

### Properties

This package exports a JSON with all the css properties for every Borealis brand.

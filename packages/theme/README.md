# @borealisgroup/theme

A default theme configuration complying with the borealis style guides. Multiple brands are supported.  

## Prerequisites

- react
- styled-components

## Install

Using npm:

```
npm install @borealisgroup/theme
```

## Usage

Import a borealis brand from this package and pass it to the theme provider of styled components.


```JS
// App.jsx
import { ThemeProvider } from 'styled-components';
import { borealis } from @borealisgroup/theme; //following imports also work: lat, ecoplast, mtmPlastics, rosier
...
<ThemeProvider theme={borealis}>
  {/* Any child components here has access to the theme */}
</ThemeProvider>
...
```

Any child styled component of the theme provider now has access to the theme properties.
```JS
import styled from 'styled-components';
const Link = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  line-height: ${({ theme }) => theme.lineHeights.lg};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;
```

### Properties

The borealis brand has the following theme properties.
```JSON
{
  "colors": {
    "primary": "#002d5a",
    "secondary": "#005d9a",
    "tertiary": "#0099d2",
    "error": "#d0021b",
    "extraLightGray": "#f7f7f7",
    "lightGray": "#cccccc",
    "darkGray": "#565656",
    "extraDarkGray": "#333333",
    "black": "#000000",
    "white": "#ffffff"
  },
  "fonts": {
    "primary": "Arial",
    "secondary": "Roboto"
  },
  "gradients": {
    "blueToWhite": "linear-gradient(96deg, rgb(0, 93, 154) 25%, rgb(0, 163, 210) 45%, rgb(91, 197, 241) 55%, rgb(255, 255, 255) 75%);",
    "blue": "linear-gradient(96deg, rgb(0, 45, 90) 0%, rgb(0, 93, 154) 25%, rgb(0, 153, 210) 60%, rgb(130, 207, 245) 100%);"
  },
  "borderRadiuses": [
    "2px",
    "4px",
    "8px",
    "50%"
  ],
  "breakPoints": [
    "426px",
    "600px",
    "768px",
    "992px",
    "1280px",
    "1600px"
  ],
  "fontSizes": [
    "12.8px",
    "16px",
    "20px",
    "25.6px",
    "38.4px",
    "48px",
    "96px"
  ],
  "lineHeights": [
    "14.4px",
    "18px",
    "22.5px",
    "28.8px",
    "43.199999999999996px",
    "54px",
    "108px"
  ],
  "spacings": [
    "6.4px",
    "8px",
    "10px",
    "12.8px",
    "19.2px",
    "24px",
    "48px"
  ],
  "shadows": [
    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
  ]
}
```
The other brands have the same values with the exception of colors, fonts and gradients.
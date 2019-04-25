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
  "borderRadiuses": {
    "xs": "2px",
    "md": "4px",
    "xl": "8px",
    "circle": "50%"
  },
  "breakPoints": {
    "xss": "426px",
    "xs": "600px",
    "sm": "768px",
    "md": "992px",
    "lg": "1280px",
    "xl": "1600px"
  },
  "fontSizes": {
    "xss": "12.8px",
    "xs": "16px",
    "sm": "20px",
    "md": "25.6px",
    "lg": "38.4px",
    "xl": "48px",
    "xll": "96px"
  },
  "lineHeights": {
    "xss": "14.4px",
    "xs": "18px",
    "sm": "22.5px",
    "md": "28.8px",
    "lg": "43.199999999999996px",
    "xl": "54px",
    "xll": "108px"
  },
  "spacings": {
    "xss": "6.4px",
    "xs": "8px",
    "sm": "10px",
    "md": "12.8px",
    "lg": "19.2px",
    "xl": "24px",
    "xll": "48px"
  },
  "shadows": {
    "level1": "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    "level2": "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    "level3": "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    "level4": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    "glow": "0px 0px 10px 2px"
  }
}
```
The other brands have the same values with the exception of colors, fonts and gradients.
const unit = 'px';

const defaultColors = {
  error: '#d0021b',
  extraLightGray: '#f7f7f7',
  lightGray: '#cccccc',
  darkGray: '#565656',
  extraDarkGray: '#333333',
  black: '#000000',
  white: '#ffffff',
};

const baseBorderRadius = 2;
const defaultBorderRadiuses = {
  xs: `${baseBorderRadius * 1}${unit}`,
  md: `${baseBorderRadius * 2}${unit}`,
  xl: `${baseBorderRadius * 4}${unit}`,
  circle: '50%',
};

const baseFontSize = 16;
const defaultFontSize = {
  xss: `${baseFontSize * 0.8}${unit}`,
  xs: `${baseFontSize * 1}${unit}`,
  sm: `${baseFontSize * 1.25}${unit}`,
  md: `${baseFontSize * 1.6}${unit}`,
  lg: `${baseFontSize * 2.4}${unit}`,
  xl: `${baseFontSize * 3}${unit}`,
  xll: `${baseFontSize * 6}${unit}`,
};

const baseLineHeight = 18;
const defaultLineHeights = {
  xss: `${baseLineHeight * 0.8}${unit}`,
  xs: `${baseLineHeight * 1}${unit}`,
  sm: `${baseLineHeight * 1.25}${unit}`,
  md: `${baseLineHeight * 1.6}${unit}`,
  lg: `${baseLineHeight * 2.4}${unit}`,
  xl: `${baseLineHeight * 3}${unit}`,
  xll: `${baseLineHeight * 6}${unit}`,
};

const baseSpacing = 8;
const defaultSpacing = {
  xss: `${baseSpacing * 0.8}${unit}`,
  xs: `${baseSpacing * 1}${unit}`,
  sm: `${baseSpacing * 1.25}${unit}`,
  md: `${baseSpacing * 1.6}${unit}`,
  lg: `${baseSpacing * 2.4}${unit}`,
  xl: `${baseSpacing * 3}${unit}`,
  xll: `${baseSpacing * 6}${unit}`,
};

const defaultShadows = {
  level1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  level2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  level3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  level4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  glow: '0px 0px 10px 2px',
};

const defaultBreakPoints = {
  xss: `426${unit}`,
  xs: `600${unit}`,
  sm: `768${unit}`,
  md: `992${unit}`,
  lg: `1280${unit}`,
  xl: `1600${unit}`,
};

const defaultValues = {
  borderRadiuses: {
    ...defaultBorderRadiuses,
  },
  breakPoints: {
    ...defaultBreakPoints,
  },
  fontSizes: {
    ...defaultFontSize,
  },
  lineHeights: {
    ...defaultLineHeights,
  },
  spacings: {
    ...defaultSpacing,
  },
  shadows: {
    ...defaultShadows,
  },
};

const borealis = {
  colors: {
    primary: '#002d5a',
    secondary: '#005d9a',
    tertiary: '#0099d2',
    ...defaultColors,
  },
  fonts: {
    primary: 'Arial',
    secondary: 'Roboto',
  },
  gradients: {
    blueToWhite:
      'linear-gradient(96deg, rgb(0, 93, 154) 25%, rgb(0, 163, 210) 45%, rgb(91, 197, 241) 55%, rgb(255, 255, 255) 75%);',
    blue:
      'linear-gradient(96deg, rgb(0, 45, 90) 0%, rgb(0, 93, 154) 25%, rgb(0, 153, 210) 60%, rgb(130, 207, 245) 100%);',
  },
  ...defaultValues,
};

const ecoplast = {
  colors: {
    primary: '#00af3f',
    secondary: '#d52b1e',
    tertiary: '#3398da',
    ...defaultColors,
  },
  fonts: {
    primary: 'Arial',
  },
  ...defaultValues,
};

const lat = {
  colors: {
    primary: '#21c400',
    secondary: '#7a9999',
    tertiary: '#ff8000',
    ...defaultColors,
  },
  fonts: {
    primary: 'Arial',
  },
  gradients: {
    darkGreen: 'linear-gradient(to right, #66f200, #2bc400);',
    lightGreen: 'linear-gradient(to right, #bfff80, #80ff19);',
    orange: 'linear-gradient(to right, #ffcc00, #ff8000);',
  },
  ...defaultValues,
};

const mtmPlastics = {
  colors: {
    primary: '#007858',
    secondary: '#f07f3c',
    tertiary: '#3398da',
    ...defaultColors,
  },
  fonts: {
    primary: 'Calibri',
  },
  ...defaultValues,
};

const rosier = {
  colors: {
    primary: '#0099d2',
    secondary: '#005d9a',
    tertiary: '#0099d2',
    ...defaultColors,
  },
  fonts: {
    primary: 'Calibri',
  },
  ...defaultValues,
};

export { borealis, ecoplast, lat, mtmPlastics, rosier };

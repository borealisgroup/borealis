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
const borderRadiuses = [
  `${baseBorderRadius * 1}${unit}`,
  `${baseBorderRadius * 2}${unit}`,
  `${baseBorderRadius * 4}${unit}`,
  '50%',
];

const baseLineHeight = 18;
const lineHeights = [
  `${baseLineHeight * 0.8}${unit}`,
  `${baseLineHeight * 1}${unit}`,
  `${baseLineHeight * 1.25}${unit}`,
  `${baseLineHeight * 1.6}${unit}`,
  `${baseLineHeight * 2.4}${unit}`,
  `${baseLineHeight * 3}${unit}`,
  `${baseLineHeight * 6}${unit}`,
];

const baseSpacing = 8;
const spacings = [
  `${baseSpacing * 0.8}${unit}`,
  `${baseSpacing * 1}${unit}`,
  `${baseSpacing * 1.25}${unit}`,
  `${baseSpacing * 1.6}${unit}`,
  `${baseSpacing * 2.4}${unit}`,
  `${baseSpacing * 3}${unit}`,
  `${baseSpacing * 6}${unit}`,
];

const shadows = [
  '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
];

const breakPoints = [
  `426${unit}`,
  `600${unit}`,
  `768${unit}`,
  `992${unit}`,
  `1280${unit}`,
  `1600${unit}`,
];

const getOnlyNumbers = string => string.replace(/\D/g, '');
const roundTwoDecimals = number => Math.round(number * 100) / 100;

const getResponsiveFontSize = minFactor => {
  const minBase = 16;
  const minSize = roundTwoDecimals(minBase * minFactor);
  const maxFactor = 1.4;
  const maxSize = roundTwoDecimals(minSize * maxFactor);
  const minViewPortWidth = getOnlyNumbers(breakPoints[0]);
  const maxViewPortWidth = getOnlyNumbers(breakPoints[breakPoints.length - 1]);

  return `calc(${minSize}px + (${maxSize} - ${minSize}) * ((100vw - ${minViewPortWidth}px) / (${maxViewPortWidth} - ${minViewPortWidth})))`; // https://css-tricks.com/books/volume-i/scale-typography-screen-size/
};
const fontSizes = [0.8, 1, 1.25, 1.6, 2.4, 3, 6].map(minFactor =>
  getResponsiveFontSize(minFactor)
);

const defaultValues = {
  borderRadiuses,
  breakPoints,
  fontSizes,
  lineHeights,
  spacings,
  shadows,
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

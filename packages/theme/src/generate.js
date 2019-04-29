const antDesignColors = require('@ant-design/colors');
const fs = require('fs');
const { getResponsiveSize } = require('./font-size-resp');

const { generate } = antDesignColors;

const PX = 'px';

const baseBorderRadius = 2;
const borderRadiuses = [
  `${baseBorderRadius * 1}${PX}`,
  `${baseBorderRadius * 2}${PX}`,
  `${baseBorderRadius * 4}${PX}`,
  '50%',
];

const breakPoints = [
  `426${PX}`,
  `600${PX}`,
  `768${PX}`,
  `992${PX}`,
  `1280${PX}`,
  `1600${PX}`,
];

const borders = [
  0,
  `1${PX} solid`,
  `2${PX} solid`,
  `4${PX} solid`,
  `8${PX} solid`,
  `16${PX} solid`,
  `32${PX} solid`,
];

const fontSizesFluid = [0.8, 1, 1.25, 1.6, 2.4, 3, 6].map(minFactor =>
  getResponsiveSize(breakPoints, minFactor, 16)
);

const lineHeightsFluid = [0.8, 1, 1.25, 1.6, 2.4, 3, 6].map(minFactor =>
  getResponsiveSize(breakPoints, minFactor, 19)
);

const fontSizes = [12, 14, 16, 20, 24, 32, 40, 48];

const lineHeights = fontSizes.map(fontSize => fontSize * 1.5);

const defaultValues = {
  borders,
  borderRadiuses,
  breakPoints,
  fontSizesFluid,
  lineHeightsFluid,
  lineHeights,
  fontSizes,
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 600,
  },
  space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 112, 128],
  shadows: [
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)',
  ],
};

const defaultColors = {
  black: '#000',
  white: '#fff',
  transparent: 'transparent',
  blacks: [
    'rgba(0, 0, 0, 0.80)',
    'rgba(0, 0, 0, 0.65)',
    'rgba(0, 0, 0, 0.50)',
    'rgba(0, 0, 0, 0.30)',
    'rgba(0, 0, 0, 0.15)',
    'rgba(0, 0, 0, 0.09)',
    'rgba(0, 0, 0, 0.04)',
    'rgba(0, 0, 0, 0.02)',
  ],
  whites: [
    'rgba(255, 255, 255, 1)',
    'rgba(255, 255, 255, 0.8)',
    'rgba(255, 255, 255, 0.65)',
    'rgba(255, 255, 255, 0.5)',
    'rgba(255, 255, 255, 0.3)',
    'rgba(255, 255, 255, 0.15)',
    'rgba(255, 255, 255, 0.09)',
    'rgba(255, 255, 255, 0.04)',
  ],
};

const borealisPalette = {
  darkblue: generate('#002d5a'),
  blue: generate('#005d9a'),
  lightblue: generate('#0099d2'),
  red: generate('#d10000'),
  orange: generate('#ee7e1a'),
  lightorange: generate('#fab900'),
  yellow: generate('#ffe100'),
  green: generate('#91b119'),
  lightgreen: generate('#d2d232'),
  gray: generate('#bfbfbf'),
};

const latPalette = {
  ...borealisPalette,
  green: generate('#21c400'),
  gray: generate('#7a9999'),
  orange: generate('#ff8000'),
};

const mtmPlasticsPalette = {
  ...borealisPalette,
  green: generate('#007858'),
  orange: generate('#f07f3c'),
  lightblue: generate('#3398da'),
  red: generate('#cc072c'),
};

const ecoplastPalette = {
  ...borealisPalette,
  green: generate('#00af3f'),
  red: generate('#d52b1e'),
};

const rosierPalette = {
  ...borealisPalette,
  ligthblue: generate('#0099d2'),
};

const getStateColors = palette => ({
  state: {
    error: palette.red[5],
    warning: palette.orange[5],
    success: palette.green[5],
    info: palette.lightblue[5],
  },
});

const borealis = {
  colors: {
    ...borealisPalette,
    ...getStateColors(borealisPalette),
    ...defaultColors,
    primary: borealisPalette.darkblue[5],
    secondary: borealisPalette.blue[5],
    tertiary: borealisPalette.lightblue[5],
    bodytext: borealisPalette.darkblue[5],
  },
  gradients: {
    blueToWhite:
      'linear-gradient(96deg, rgb(0, 93, 154) 25%, rgb(0, 163, 210) 45%, rgb(91, 197, 241) 55%, rgb(255, 255, 255) 75%);',
    blue:
      'linear-gradient(96deg, rgb(0, 45, 90) 0%, rgb(0, 93, 154) 25%, rgb(0, 153, 210) 60%, rgb(130, 207, 245) 100%);',
  },
  fonts: {
    primary: 'Arial',
    secondary: 'Roboto',
  },
  ...defaultValues,
};

const lat = {
  colors: {
    ...defaultColors,
    ...latPalette,
    ...getStateColors(latPalette),
    primary: latPalette.green[5],
    secondary: latPalette.gray[5],
    tertiary: latPalette.orange[5],
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
    ...defaultColors,
    ...mtmPlasticsPalette,
    ...getStateColors(mtmPlasticsPalette),
    primary: mtmPlasticsPalette.green[5],
    secondary: mtmPlasticsPalette.orange[5],
    tertiary: mtmPlasticsPalette.lightblue[5],
  },
  fonts: {
    primary: 'Calibri',
  },
  ...defaultValues,
};

const ecoplast = {
  colors: {
    ...defaultColors,
    ...ecoplastPalette,
    ...getStateColors(ecoplastPalette),
    primary: ecoplastPalette.green[5],
    secondary: ecoplastPalette.red[5],
  },
  fonts: {
    primary: 'Arial',
  },
  ...defaultValues,
};

const rosier = {
  colors: {
    ...defaultColors,
    ...rosierPalette,
    ...getStateColors(rosierPalette),
    primary: rosierPalette.lightblue[5],
  },
  fonts: {
    primary: 'Arial',
  },
  ...defaultValues,
};

const themes = {
  borealis,
  lat,
  mtmPlastics,
  ecoplast,
  rosier,
};

Object.keys(themes).forEach(key => {
  const theme = themes[key];
  fs.writeFile(
    `src/brands/${key}.json`,
    JSON.stringify(theme, null, 2),
    'utf8',
    () => console.info(`${key} theme has been saved to json`)
  );
});

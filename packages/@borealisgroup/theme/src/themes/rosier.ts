import { getStateColors } from '../utils';
import { borealisPalette } from './borealis';
import { commonTheme } from './common';

const rosierPalette = {
  ...borealisPalette,
  ligthblue: [
    '#e6fcff',
    '#a3f3ff',
    '#77e2f7',
    '#4bcbeb',
    '#23b2de',
    '#0099d2',
    '#0078ab',
    '#005885',
    '#003c5e',
    '#002238',
  ],
};

export const rosierTheme = {
  ...commonTheme,
  colors: {
    ...commonTheme.colors,
    ...rosierPalette,
    ...getStateColors(rosierPalette),
    primary: rosierPalette.lightblue[5],
  },
  fonts: {
    primary: 'Arial',
  },
};

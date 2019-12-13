import { getStateColors } from '../utils';
import { borealisPalette } from './borealis';
import { commonTheme } from './common';

const ecoplastPalette = {
  ...borealisPalette,
  green: [
    '#d8f0dd',
    '#91e3a4',
    '#67d685',
    '#40c96a',
    '#1ebd53',
    '#00af3f',
    '#008a37',
    '#00632b',
    '#003d1d',
    '#00170b',
  ],
  red: [
    '#fff3f0',
    '#ffd2c7',
    '#fcad9d',
    '#f0806e',
    '#e35444',
    '#d52b1e',
    '#b01510',
    '#8a0606',
    '#630003',
    '#3d0004',
  ],
};

export const ecoplastTheme = {
  ...commonTheme,
  colors: {
    ...commonTheme.colors,
    ...ecoplastPalette,
    ...getStateColors(ecoplastPalette),
    primary: ecoplastPalette.green[5],
    secondary: ecoplastPalette.red[5],
  },
  fonts: {
    primary: 'Arial',
  },
};

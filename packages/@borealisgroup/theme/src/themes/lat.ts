import { getStateColors } from '../utils';
import { borealisPalette } from './borealis';
import { commonTheme } from './common';

export const latPalette = {
  ...borealisPalette,
  green: [
    '#eeffe6',
    '#b9f79e',
    '#91eb71',
    '#6ade47',
    '#45d121',
    '#21c400',
    '#159e00',
    '#0c7800',
    '#055200',
    '#012b00',
  ],
  gray: [
    '#ccd9d7',
    '#c0ccca',
    '#b4bfbe',
    '#a8b3b2',
    '#9ca6a5',
    '#7a9999',
    '#567273',
    '#364b4d',
    '#192526',
    '#000000',
  ],
  orange: [
    '#fff7e6',
    '#ffdda3',
    '#ffca7a',
    '#ffb452',
    '#ff9b29',
    '#ff8000',
    '#d96500',
    '#b34d00',
    '#8c3800',
    '#662500',
  ],
};

export const latTheme = {
  ...commonTheme,
  colors: {
    ...commonTheme.colors,
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
};

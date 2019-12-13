import { getStateColors } from '../utils';
import { borealisPalette } from './borealis';
import { commonTheme } from './common';

const mtmPlasticsPalette = {
  ...borealisPalette,
  green: [
    '#a5b8b0',
    '#6dab92',
    '#4c9e80',
    '#2f9170',
    '#158563',
    '#007858',
    '#00523f',
    '#002b23',
    '#000504',
    '#000000',
  ],
  orange: [
    '#fff8f0',
    '#fff1e3',
    '#ffdaba',
    '#ffc191',
    '#fca368',
    '#f07f3c',
    '#c95e28',
    '#a34218',
    '#7d2a0c',
    '#571a08',
  ],
  lightblue: [
    '#f0fbff',
    '#def6ff',
    '#b5e9ff',
    '#85cef2',
    '#5ab2e6',
    '#3398da',
    '#2073b3',
    '#12538c',
    '#083766',
    '#042040',
  ],
  red: [
    '#ffe6e6',
    '#ffabaf',
    '#f27c85',
    '#e65062',
    '#d92944',
    '#cc072c',
    '#a60024',
    '#800020',
    '#590019',
    '#330010',
  ],
};

export const mtmPlasticsTheme = {
  ...commonTheme,
  colors: {
    ...commonTheme.colors,
    ...mtmPlasticsPalette,
    ...getStateColors(mtmPlasticsPalette),
    primary: mtmPlasticsPalette.green[5],
    secondary: mtmPlasticsPalette.orange[5],
    tertiary: mtmPlasticsPalette.lightblue[5],
  },
  fonts: {
    primary: 'Calibri',
  },
};

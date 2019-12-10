import { getStateColors } from '../utils';
import { commonTheme } from './common';

enum gradients {
  blueToWhite = 'linear-gradient(96deg, rgb(0, 93, 154) 25%, rgb(0, 163, 210) 45%, rgb(91, 197, 241) 55%, rgb(255, 255, 255) 75%);',
  blue = 'linear-gradient(96deg, rgb(0, 45, 90) 0%, rgb(0, 93, 154) 25%, rgb(0, 153, 210) 60%, rgb(130, 207, 245) 100%);',
}

enum fonts {
  primary = 'Arial',
  secondary = 'Roboto',
}

export const borealisPalette = {
  darkblue: [
    '#8a9499',
    '#5a7a8c',
    '#3d6580',
    '#255173',
    '#103e66',
    '#002d5a',
    '#001833',
    '#00060d',
    '#000000',
    '#000000',
  ] as const,
  blue: [
    '#c3d4d9',
    '#83b8cc',
    '#5ca1bf',
    '#398ab3',
    '#1b73a6',
    '#005d9a',
    '#004173',
    '#00294d',
    '#001326',
    '#000000',
  ] as const,
  lightblue: [
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
  ] as const,
  red: [
    '#ffeae6',
    '#ffafa3',
    '#f78477',
    '#eb564b',
    '#de2a23',
    '#d10000',
    '#ab0006',
    '#850009',
    '#5e0009',
    '#380007',
  ] as const,
  orange: [
    '#fff7e8',
    '#ffe6bf',
    '#ffd296',
    '#ffbb6e',
    '#fa9f43',
    '#ee7e1a',
    '#c75d0c',
    '#a14102',
    '#7a2d00',
    '#541c00',
  ] as const,
  lightorange: [
    '#fffce6',
    '#fff3a3',
    '#ffe97a',
    '#ffdc52',
    '#ffcd29',
    '#fab900',
    '#d49400',
    '#ad7400',
    '#875600',
    '#613a00',
  ] as const,
  yellow: [
    '#feffe6',
    '#fdffa3',
    '#fffd7a',
    '#fff652',
    '#ffed29',
    '#ffe100',
    '#d9b800',
    '#b39200',
    '#8c6e00',
    '#664d00',
  ] as const,
  green: [
    '#eff0e1',
    '#dfe3b1',
    '#cdd685',
    '#b9c95d',
    '#a4bd39',
    '#91b119',
    '#6a8a0c',
    '#486304',
    '#2a3d00',
    '#0f1700',
  ] as const,
  lightgreen: [
    '#fffcf0',
    '#fffbe0',
    '#f7f0b2',
    '#ebe483',
    '#ded959',
    '#d2d232',
    '#a6ab20',
    '#7d8513',
    '#565e08',
    '#313804',
  ] as const,
  gray: [
    '#ffffff',
    '#f2f2f2',
    '#e6e6e6',
    '#d9d9d9',
    '#cccccc',
    '#bfbfbf',
    '#999999',
    '#737373',
    '#4d4d4d',
    '#262626',
  ] as const,
};

export const borealisTheme = {
  ...commonTheme,
  colors: {
    ...commonTheme.colors,
    ...borealisPalette,
    ...getStateColors(borealisPalette),
    primary: borealisPalette.darkblue[5],
    secondary: borealisPalette.blue[5],
    tertiary: borealisPalette.lightblue[5],
    bodytext: borealisPalette.darkblue[5],
  },
  gradients,
  fonts,
};

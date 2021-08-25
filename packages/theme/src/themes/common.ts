import { getResponsiveSize } from '../utils/utils';

export enum fontWeights {
  light = 300,
  normal = 400,
  bold = 600,
}

const borderRadiuses = ['2px', '4px', '8px', '50%'] as const;

const breakPoints = [
  '426px',
  '600px',
  '768px',
  '992px',
  '1280px',
  '1600px',
] as const;

const borders = [
  0,
  '1px solid',
  '2px solid',
  '4px solid',
  '8px solid',
  '16px solid',
  '32px solid',
] as const;

const fontSizesFluid = [0.8, 1, 1.25, 1.6, 2.4, 3, 6].map(minFactor =>
  getResponsiveSize(breakPoints, minFactor, 16)
);

const lineHeightsFluid = [0.8, 1, 1.25, 1.6, 2.4, 3, 6].map(minFactor =>
  getResponsiveSize(breakPoints, minFactor, 19)
);

const fontSizes = [12, 14, 16, 20, 24, 32, 40, 48] as const;

const lineHeights = fontSizes.map(fontSize => fontSize * 1.5);

export const commonTheme = {
  borders,
  borderRadiuses,
  breakPoints,
  fontSizesFluid,
  lineHeightsFluid,
  lineHeights,
  fontSizes,
  fontWeights,
  space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 112, 128] as const,
  shadows: [
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)',
  ] as const,
  colors: {
    black: '#000' as const,
    white: '#fff' as const,
    transparent: 'transparent' as const,
    blacks: [
      'rgba(0, 0, 0, 0.80)',
      'rgba(0, 0, 0, 0.65)',
      'rgba(0, 0, 0, 0.50)',
      'rgba(0, 0, 0, 0.30)',
      'rgba(0, 0, 0, 0.15)',
      'rgba(0, 0, 0, 0.09)',
      'rgba(0, 0, 0, 0.04)',
      'rgba(0, 0, 0, 0.02)',
    ] as const,
    whites: [
      'rgba(255, 255, 255, 1)',
      'rgba(255, 255, 255, 0.8)',
      'rgba(255, 255, 255, 0.65)',
      'rgba(255, 255, 255, 0.5)',
      'rgba(255, 255, 255, 0.3)',
      'rgba(255, 255, 255, 0.15)',
      'rgba(255, 255, 255, 0.09)',
      'rgba(255, 255, 255, 0.04)',
    ] as const,
  },
};

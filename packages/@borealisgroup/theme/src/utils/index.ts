interface Palette {
  red: readonly string[];
  orange: readonly string[];
  green: readonly string[];
  lightblue: readonly string[];
}

export const getStateColors = (palette: Palette) => ({
  state: {
    error: palette.red[5],
    warning: palette.orange[5],
    success: palette.green[5],
    info: palette.lightblue[5],
  },
});

export const getOnlyNumbers = (value: string) => value?.replace(/\D/g, '');

export const roundTwoDecimals = (value: number) =>
  Math.round(value * 100) / 100;

export const getResponsiveSize = (
  breakPoints: readonly string[],
  minFactor: number,
  minBase: number
) => {
  const minSize = roundTwoDecimals(minBase * minFactor);
  const maxFactor = 1.4;
  const maxSize = roundTwoDecimals(minSize * maxFactor);
  const minViewPortWidth = getOnlyNumbers(breakPoints[0]);
  const maxViewPortWidth = getOnlyNumbers(breakPoints[breakPoints.length - 1]);

  return `calc(${minSize}px + (${maxSize} - ${minSize}) * ((100vw - ${minViewPortWidth}px) / (${maxViewPortWidth} - ${minViewPortWidth})))`; // https://css-tricks.com/books/volume-i/scale-typography-screen-size/
};

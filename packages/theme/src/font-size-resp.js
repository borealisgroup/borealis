const getOnlyNumbers = string => string.replace(/\D/g, '');
const roundTwoDecimals = number => Math.round(number * 100) / 100;

const getResponsiveSize = (breakPoints, minFactor, minBase) => {
  const minSize = roundTwoDecimals(minBase * minFactor);
  const maxFactor = 1.4;
  const maxSize = roundTwoDecimals(minSize * maxFactor);
  const minViewPortWidth = getOnlyNumbers(breakPoints[0]);
  const maxViewPortWidth = getOnlyNumbers(breakPoints[breakPoints.length - 1]);

  return `calc(${minSize}px + (${maxSize} - ${minSize}) * ((100vw - ${minViewPortWidth}px) / (${maxViewPortWidth} - ${minViewPortWidth})))`; // https://css-tricks.com/books/volume-i/scale-typography-screen-size/
};

module.exports.getResponsiveSize = getResponsiveSize;

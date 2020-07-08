/* eslint-disable prefer-destructuring */
/* eslint-disable no-bitwise */
import 'react-notifications/lib/notifications.css';
import React from 'react';
import {
  NotificationContainer,
  NotificationManager,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} from 'react-notifications';
import Color from 'color';
import copy from 'copy-text-to-clipboard';
import styled from 'styled-components';
import { borealisTheme } from './themes/borealis';

export default {
  title: 'ThemeS/borealisTheme',
};

const Wrapper = styled.div`
  width: 100%;
  overflow: auto;
  padding: ${({ theme }) => theme.space[1]}px;
  margin-bottom: ${({ theme }) => theme.space[8]}px;
`;

const DocumentationWrapper = ({ children }: any) => (
  <>
    <NotificationContainer />
    <Wrapper>{children}</Wrapper>
  </>
);

const Card = styled.div`
  width: 400px;
  padding: ${({ theme }) => theme.space[1]}px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows[0]};
  margin-right: ${({ theme }) => theme.space[3]}px;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  float: left;
`;

const DemoPropertyWrapper = styled.div`
  width: 100%;
`;

const Paragraph = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.space[1]}px;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  cursor: pointer;
`;

const Button = styled.button`
  border: ${({ theme }) => theme.borders[1]}
    ${({ theme }) => theme.colors.white};
  background-color: transparent;
  color: inherit;
  margin-bottom: 5px;
  cursor: pointer;
`;

const Form = styled.form<{ display: any }>`
  display: ${({ display }) => display};
`;

const copyToClipBoard = (
  toCopy: string,
  event:
    | React.FormEvent<HTMLFormElement>
    | React.MouseEvent<HTMLParagraphElement, MouseEvent>
) => {
  if (event) event.preventDefault();
  if (copy(toCopy)) {
    NotificationManager.success(toCopy, 'Copied to clipboard', 1500);
  } else {
    NotificationManager.warning('Something went wrong', ':(');
  }
};

const VisualDocumentation = (
  demoProperty: {} | null | undefined,
  css: string,
  value: string
) => (
  <Card>
    <DemoPropertyWrapper>{demoProperty}</DemoPropertyWrapper>
    <Paragraph onClick={event => copyToClipBoard(css, event)}>{css}</Paragraph>
    <Paragraph onClick={event => copyToClipBoard(value, event)}>
      {value}
    </Paragraph>
  </Card>
);

const WrappingDocumentation = (
  title: {} | null | undefined,
  children: {} | null | undefined
) => (
  <DocumentationWrapper>
    <h1>{title}</h1>
    {children}
  </DocumentationWrapper>
);

const ColorDocumentation = (value: string, name: string, index: React.Key) => {
  let fullName = name;

  if (index !== '') fullName = `${fullName}[${index}]`;
  const color = Color(value);

  const Background = styled.div<any>`
    width: calc(100% / 10);
    min-width: 125px;
    height: 150px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    float: left;
    color: ${color.isDark()
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizesFluid[0]};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  `;
  const css = `\${({ theme }) => theme.colors.${name}${
    index !== '' ? `[${index}]` : ''
  }};`;

  return (
    <Background backgroundColor={value}>
      <div>
        <p>{fullName}</p>
        <Form display="block" onSubmit={event => copyToClipBoard(css, event)}>
          <Button>Copy code</Button>
        </Form>
        <Form display="block" onSubmit={event => copyToClipBoard(value, event)}>
          <Button>Copy value</Button>
        </Form>
      </div>
    </Background>
  );
};

const getColors = (colors: { [x: string]: any }) => {
  const rearangedColors: any = {};
  Object.keys(colors).forEach(key => {
    const color = colors[key];
    if (typeof color === 'string') {
      if (!rearangedColors.SINGLE) rearangedColors.SINGLE = {};
      rearangedColors.SINGLE[key] = color;
    } else {
      rearangedColors[key] = color;
    }
  });
  const singleColors = Object.keys(rearangedColors.SINGLE).map(key => {
    const value = rearangedColors.SINGLE[key];
    return ColorDocumentation(value, key, '');
  });
  const listColors = Object.keys(rearangedColors).map(key => {
    if (key !== 'SINGLE') {
      const colorCategory = rearangedColors[key];
      if (Array.isArray(colorCategory)) {
        return (
          <DocumentationWrapper>
            {colorCategory.map((value, index) =>
              ColorDocumentation(value, key, index)
            )}
          </DocumentationWrapper>
        );
      }
    }
    return null;
  });

  return WrappingDocumentation(
    'colors',
    <>
      <DocumentationWrapper>{singleColors}</DocumentationWrapper>
      {listColors}
    </>
  );
};

const Box = styled.div<any>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-sizing: border-box;
  border: ${({ border }) => border} ${({ theme }) => theme.colors.black};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-image: ${({ backgroundImage }) => backgroundImage};
  box-shadow: ${({ boxShadow }) => boxShadow};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: ${({ fontFamily }) => fontFamily};
  overflow: auto;
`;

const boxDefaultProps = {
  width: '100%',
  height: '100px',
  marginBottom: '10px',
};

const getBorders = (borders: any[]) => {
  const documentation = borders.map((border, index) =>
    VisualDocumentation(
      <Box {...boxDefaultProps} border={border} />,
      `border: \${({ theme }) => theme.borders[${index}]} <color>;`,
      border
    )
  );
  return WrappingDocumentation('borders', documentation);
};

const getBorderRadiuses = (borderRadiuses: any[]) => {
  const documentation = borderRadiuses.map((borderRadius, index) =>
    VisualDocumentation(
      <Box
        {...boxDefaultProps}
        borderRadius={borderRadius}
        border="3px solid"
      />,
      `border-radius: \${({ theme }) => theme.borderRadiuses[${index}]};`,
      borderRadius
    )
  );
  return WrappingDocumentation('borderRadiuses', documentation);
};

const getGradients = (gradients: { [x: string]: any }) => {
  if (gradients) {
    const documentation = Object.keys(gradients).map(key => {
      const gradient = gradients[key];
      return VisualDocumentation(
        <Box {...boxDefaultProps} backgroundImage={gradient} />,
        `background-image: \${({ theme }) => theme.gradients.${key}};`,
        gradient
      );
    });
    return WrappingDocumentation('gradients', documentation);
  }
  return null;
};

const getShadows = (shadows: any[]) => {
  const documentation = shadows.map((shadow, index) =>
    VisualDocumentation(
      <Box {...boxDefaultProps} width="70%" boxShadow={shadow} />,
      `box-shadow: \${({ theme }) => theme.shadows[${index}]};`,
      shadow
    )
  );
  return WrappingDocumentation('shadows', documentation);
};

const getSpace = (spaces: any[]) => {
  const documentation = spaces.map((space, index) =>
    VisualDocumentation(
      <Box {...boxDefaultProps} height="400px" border={`${space}px solid`} />,
      `\${({ theme }) => theme.space[${index}]}px;`,
      space
    )
  );
  return WrappingDocumentation('space', documentation);
};

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis egestas nisl. Donec ex elit, finibus eu nibh vel, gravida mollis nisl. Ut tempus iaculis massa, vitae tempus ex scelerisque eu.';

const getTypographic = (
  data: any[],
  property: string,
  name: {} | null | undefined,
  extra: string,
  cssName: string
) => {
  const documentation = data.map((value, index) =>
    VisualDocumentation(
      <Box
        {...boxDefaultProps}
        height="200px"
        {...{ [property]: `${value}${extra}` }}
      >
        {lorem}
      </Box>,
      `${cssName}: \${({ theme }) => theme.${name}[${index}]}${extra};`,
      value
    )
  );
  return WrappingDocumentation(name, documentation);
};

const getTypographicObject = (
  data: any,
  property: string,
  name: {} | null | undefined,
  extra: string,
  cssName: string
) => {
  const documentation = Object.keys(data).map((key, index) =>
    VisualDocumentation(
      <Box
        {...boxDefaultProps}
        height="200px"
        {...{ [property]: `${data[key]}` }}
      >
        {lorem}
      </Box>,
      `${cssName}: \${({ theme }) => theme.${name}[${index}]};${extra}`,
      data[key]
    )
  );
  return WrappingDocumentation(name, documentation);
};

const brand: any = borealisTheme;

export const Colors = () => getColors(brand.colors);
export const Gradients = () => getGradients(brand.gradients);
export const Borders = () => getBorders(brand.borders);
export const BorderRadius = () => getBorderRadiuses(brand.borderRadiuses);
export const Shadows = () => getShadows(brand.shadows);
export const Spacing = () => getSpace(brand.space);
export const Typographic = () =>
  getTypographic(brand.fontSizes, 'fontSize', 'fontSizes', 'px', 'font-size');
export const FontSizeFluid = () =>
  getTypographic(
    brand.fontSizesFluid,
    'fontSize',
    'fontSizesFluid',
    '',
    'font-size'
  );
export const LineHeight = () =>
  getTypographic(
    brand.lineHeights,
    'lineHeight',
    'lineHeights',
    'px',
    'line-height'
  );
export const LineHeightFluid = () =>
  getTypographic(
    brand.lineHeightsFluid,
    'lineHeight',
    'lineHeightsFluid',
    '',
    'line-height'
  );
export const FontWeight = () =>
  getTypographicObject(
    brand.fontWeights,
    'fontWeight',
    'fontWeights',
    '',
    'font-weight'
  );
export const FontFamily = () =>
  getTypographicObject(brand.fonts, 'fontFamily', 'fonts', '', 'font-family');

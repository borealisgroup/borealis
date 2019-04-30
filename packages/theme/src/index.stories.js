/* eslint-disable prefer-destructuring */
/* eslint-disable no-bitwise */
import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components';
import Color from 'color';
import copy from 'copy-text-to-clipboard';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import borealis from './brands/borealis.json';
import lat from './brands/lat.json';
import ecoplast from './brands/ecoplast.json';
import mtmPlastics from './brands/mtmPlastics.json';
import rosier from './brands/rosier.json';

addDecorator(story => {
  const content = story();

  const SuperWrapper = styled.div`
    font-family: ${({ theme }) => theme.fonts.primary};
  `;

  return (
    <ThemeProvider theme={borealis}>
      <>
        <NotificationContainer />
        <SuperWrapper>{content}</SuperWrapper>
      </>
    </ThemeProvider>
  );
});

const DocumentationWrapper = styled.div`
  width: 100%;
  overflow: auto;
  padding: ${({ theme }) => theme.space[1]}px;
  margin-bottom: ${({ theme }) => theme.space[8]}px;
`;

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

const Form = styled.form`
  display: ${({ display }) => display};
`;

const copyToClipBoard = (toCopy, event) => {
  if (event) event.preventDefault();
  if (copy(toCopy)) {
    NotificationManager.success(toCopy, 'Copied to clipboard', 1500);
  } else {
    NotificationManager.warning('Something went wrong', ':(');
  }
};

const VisualDocumentation = (demoProperty, css, value) => (
  <Card>
    <DemoPropertyWrapper>{demoProperty}</DemoPropertyWrapper>
    <Paragraph onClick={event => copyToClipBoard(css, event)}>{css}</Paragraph>
    <Paragraph onClick={event => copyToClipBoard(value, event)}>
      {value}
    </Paragraph>
  </Card>
);

const WrappingDocumentation = (title, children) => (
  <DocumentationWrapper>
    <h1>{title}</h1>
    {children}
  </DocumentationWrapper>
);

const ColorDocumentation = (value, name, index) => {
  let fullName = name;

  if (index !== '') fullName = `${fullName}[${index}]`;
  const color = Color(value);

  const Background = styled.div`
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

const getColors = colors => {
  const rearangedColors = {};
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

const Box = styled.div`
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

const getBorders = borders => {
  const documentation = borders.map((border, index) =>
    VisualDocumentation(
      <Box {...boxDefaultProps} border={border} />,
      `border: \${({ theme }) => theme.borders[${index}]} <color>;`,
      border
    )
  );
  return WrappingDocumentation('borders', documentation);
};

const getBorderRadiuses = borderRadiuses => {
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

const getGradients = gradients => {
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

const getShadows = shadows => {
  const documentation = shadows.map((shadow, index) =>
    VisualDocumentation(
      <Box {...boxDefaultProps} width="70%" boxShadow={shadow} />,
      `box-shadow: \${({ theme }) => theme.shadows[${index}]};`,
      shadow
    )
  );
  return WrappingDocumentation('shadows', documentation);
};

const getSpace = spaces => {
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

const getTypographic = (data, property, name, extra, cssName) => {
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

const getTypographicObject = (data, property, name, extra, cssName) => {
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

const displayValuesBrand = brand => (
  <>
    {getColors(brand.colors)}
    {getGradients(brand.gradients)}
    {getBorders(brand.borders)}
    {getBorderRadiuses(brand.borderRadiuses)}
    {getShadows(brand.shadows)}
    {getSpace(brand.space)}
    {getTypographic(
      brand.fontSizes,
      'fontSize',
      'fontSizes',
      'px',
      'font-size'
    )}
    {getTypographic(
      brand.fontSizesFluid,
      'fontSize',
      'fontSizesFluid',
      '',
      'font-size'
    )}
    {getTypographic(
      brand.lineHeights,
      'lineHeight',
      'lineHeights',
      'px',
      'line-height'
    )}
    {getTypographic(
      brand.lineHeightsFluid,
      'lineHeight',
      'lineHeightsFluid',
      '',
      'line-height'
    )}
    {getTypographicObject(
      brand.fontWeights,
      'fontWeight',
      'fontWeights',
      '',
      'font-weight'
    )}
    {getTypographicObject(
      brand.fonts,
      'fontFamily',
      'fonts',
      '',
      'font-family'
    )}
  </>
);

const themeStories = storiesOf('Theme', module);

const brands = { borealis, lat, ecoplast, mtmPlastics, rosier };
Object.keys(brands).forEach(key => {
  const brand = brands[key];
  themeStories.add(key, () => displayValuesBrand(brand));
});

// themeStories.add('borealis', () => displayValuesBrand(borealis));

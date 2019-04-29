/* eslint-disable prefer-destructuring */
/* eslint-disable no-bitwise */
import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components';
import Color from 'color';

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
      <SuperWrapper>{content}</SuperWrapper>
    </ThemeProvider>
  );
});

const Card = styled.div`
  width: 400px;
  padding: ${({ theme }) => theme.space[1]}px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  margin-right: ${({ theme }) => theme.space[3]}px;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  float: left;
`;

const Paragraph = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.space[1]}px;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
`;

const VisualDocumentation = (demoProperty, css, value) => {
  return (
    <Card>
      {demoProperty}
      <Paragraph>{css}</Paragraph>
      <Paragraph>{value}</Paragraph>
    </Card>
  );
};

const DocumentationWrapper = styled.div`
  width: 100%;
  overflow: auto;
  padding: ${({ theme }) => theme.space[1]}px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;
const WrappingDocumentation = (title, children) => (
  <DocumentationWrapper>
    <h1>{title}</h1>
    {children}
  </DocumentationWrapper>
);

const getBorders = borders => {
  const Border = styled.div`
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    border: ${({ border }) => border} ${({ theme }) => theme.colors.black};
  `;
  const borderVisuals = borders.map((border, index) =>
    VisualDocumentation(
      <Border border={border} />,
      `border: \${({ theme }) => theme.borders[${index}]} <color>`,
      border
    )
  );
  return WrappingDocumentation('borders', borderVisuals);
};

const ColorDocumentation = (value, name, index) => {
  let fullName = name;
  if (index !== '') fullName = `${fullName}[${index}]`;
  const color = Color(value);
  const Background = styled.div`
    width: calc(100% / 10);
    min-width: 150px;
    height: 150px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    float: left;
    color: ${color.isDark() ? 'white' : 'black'};
  `;

  return (
    <Background backgroundColor={value}>
      <p>{fullName}</p>
    </Background>
  );
};

const displayValuesBrand = brand => {
  const rearangedColors = {};
  Object.keys(brand.colors).forEach(key => {
    const color = brand.colors[key];
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
  });

  const colors = WrappingDocumentation(
    'colors',
    <>
      <DocumentationWrapper>{singleColors}</DocumentationWrapper>
      {listColors}
    </>
  );

  const borders = getBorders(brand.borders);
  return (
    <>
      {colors}
      {borders}
    </>
  );
};

const themeStories = storiesOf('Theme', module);

const brands = { borealis, lat, ecoplast, mtmPlastics, rosier };
Object.keys(brands).forEach(key => {
  const brand = brands[key];
  themeStories.add(key, () => displayValuesBrand(brand));
});

// themeStories.add('borealis', () => displayValuesBrand(borealis));

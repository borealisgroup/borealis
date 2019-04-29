import React from 'react';
import { storiesOf } from '@storybook/react';
import borealis from './brands/borealis.json';

const displayValuesBrand = brand => {
  console.log(brand);
  return <p>test</p>;
};

storiesOf('Theme', module).add('borealis', () => displayValuesBrand(borealis));

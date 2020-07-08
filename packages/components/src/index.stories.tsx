import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { BorealisLogo } from './logos/BorealisLogo';

export default {
  title: 'Components/BorealisLogo',
  component: BorealisLogo,
};

export const Example = () => (
  <BorealisLogo
    height={64}
    showLogo={boolean('showLogo', true)}
    showSlogan={boolean('showSlogan', true)}
    showBrand={boolean('showBrand', true)}
  />
);

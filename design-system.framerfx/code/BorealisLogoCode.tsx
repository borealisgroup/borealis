import * as React from 'react';
import { BorealisLogo, BorealisLogoProps } from '@borealisgroup/components';
import { addPropertyControls, ControlType } from 'framer';

export const BorealisLogoCode = (props: BorealisLogoProps) => (
  <BorealisLogo {...props} />
);

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(BorealisLogoCode, {
  showLogo: {
    title: 'Show Logo',
    type: ControlType.Boolean,
    defaultValue: true,
  },
  showBrand: {
    title: 'Show Brand',
    type: ControlType.Boolean,
    defaultValue: false,
  },
  showSlogan: {
    title: 'Show Slogan',
    type: ControlType.Boolean,
    defaultValue: false,
  },
});
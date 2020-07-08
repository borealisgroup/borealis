import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';
import * as System from '../../packages/components/src';
import { withHOC } from './withHOC';

const InnerBorealisLogo = props => {
  return <System.BorealisLogo {...props} />;
};

export const BorealisLogo = withHOC(InnerBorealisLogo);

BorealisLogo.defaultProps = {
  width: 150,
  height: 50,
};

addPropertyControls(BorealisLogo, {
  showBrand: {
    title: 'Show brand',
    type: ControlType.Boolean,
    defaultValue: true,
  },
  showLogo: {
    title: 'Show logo',
    type: ControlType.Boolean,
    defaultValue: true,
  },
  showSlogan: {
    title: 'Show slogan',
    type: ControlType.Boolean,
    defaultValue: false,
  },
});

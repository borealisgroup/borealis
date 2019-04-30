import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';

import { Borealis, Ecoplast, LAT, MtmPlastics, Rosier } from './brands';

const stories = storiesOf('Logo', module);

stories.addDecorator(withInfo);

stories.addDecorator(withKnobs);

const howToImportCodeInfo = nameComponent => ({
  info: `\`import { ${nameComponent} } from '@borealisgroup/logo';\``,
});

stories.add(
  'borealis',
  () => (
    <Borealis
      shape={boolean('shape', true)}
      tagline={boolean('tagline', true)}
      name={boolean('name', true)}
    />
  ),
  howToImportCodeInfo('Borealis')
);

stories.add('lat', () => <LAT />, howToImportCodeInfo('LAT'));

stories.add('ecoplast', () => <Ecoplast />, howToImportCodeInfo('Ecoplast'));

stories.add(
  'mtmPlastics',
  () => <MtmPlastics />,
  howToImportCodeInfo('MtmPlastics')
);

stories.add('Rosier', () => <Rosier />, howToImportCodeInfo('Rosier'));

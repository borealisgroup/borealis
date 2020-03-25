import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Borealis, Ecoplast, LAT, MtmPlastics, Rosier } from './logos';

const stories = storiesOf('components/logos', module);

stories.addDecorator(withInfo);

stories.addDecorator(withKnobs);

const howToImportCodeInfo = (nameComponent) => ({
  info: `\`import { ${nameComponent} } from '@borealisgroup/components';\``,
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

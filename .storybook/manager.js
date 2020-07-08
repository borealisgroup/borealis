import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'Borealis UI',
  brandUrl: 'https://github.com/borealisgroup/borealis'
});

addons.setConfig({
  theme: theme,
  panelPosition: 'right',
});

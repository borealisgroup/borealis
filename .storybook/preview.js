import * as React from 'react';
import { DocsPage } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { borealisTheme } from '@borealisgroup/theme/src';
import { GlobalStyle } from './globalStyle';

addParameters({
  options: {
    showRoots: true,
  },
  docs: { page: DocsPage },
});

addDecorator(story => (
  <ThemeProvider theme={borealisTheme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
));

addDecorator(withKnobs);


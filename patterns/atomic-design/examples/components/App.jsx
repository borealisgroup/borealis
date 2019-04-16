import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/defaultTheme';
import GlobalStyle from 'theme/globalStyle';
import { HomePage } from './pages/HomePage';

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/home" exact component={HomePage} />
      </Switch>
    </>
  </ThemeProvider>
);

export default withRouter(App);

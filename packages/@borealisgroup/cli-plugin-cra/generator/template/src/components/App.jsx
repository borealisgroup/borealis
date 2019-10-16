import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import store from 'store/createStore';
import theme from 'theme/theme';
import GlobalStyle from 'theme/globalStyle';
import { HomePage } from 'components';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default App;

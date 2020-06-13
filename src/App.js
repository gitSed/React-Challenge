import React from 'react';
import logo from './logo.svg';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

/* Own Components */
import Layout from './components/Layout/index';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff8673',
    },
    secondary: {
      main: '#eaea6c',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        Este es el Layout
      </Layout>
    </ThemeProvider>
  );
};

export default App;

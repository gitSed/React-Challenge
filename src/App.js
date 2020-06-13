import React from 'react';

/* Third party components */
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

/* Own Components */
import Layout from './components/Layout/index';
import CardItem from './components/CardItem/index';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a0e2ba',
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
        <CardItem />>
      </Layout>
    </ThemeProvider>
  );
};

export default App;

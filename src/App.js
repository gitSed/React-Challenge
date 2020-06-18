import React from 'react';

/* Third party components */
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

/* Own Components */
import Layout from './components/Layout/index';
import ListCard from './components/ListCard';

/* Context */
import NotificationProvider from './Context/NotificationContext';
import PostProvider from './Context/PostsContext';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a0e2ba',
    },
    secondary: {
      main: '#eaea6c',
    },
    success: {
      main: '#82C341',
      contrastText: '#fff'
    }
  },
});

const App = () => {
  return (
    <NotificationProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <PostProvider>
            <ListCard />
          </PostProvider>
        </Layout>
      </ThemeProvider>
    </NotificationProvider>
  );
};

export default App;

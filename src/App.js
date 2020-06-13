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
        <CardItem
          title={'Reddit Media'}
          author={'Edgar Sandoval'}
          thumbnailSrc={null}
          // thumbnailSrc={"https://b.thumbs.redditmedia.com/ZF37c_fUuPPTootrtYGvCy5vpbcIPT3Feo3uGNNchfE.jpg"}
          createdHours={1}
          num_comments={23}
          actionClick={() => {
            
          }}
        />
      </Layout>
    </ThemeProvider>
  );
};

export default App;

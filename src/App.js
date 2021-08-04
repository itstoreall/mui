import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Text from './pages/Text';
import Form from './pages/Form';
import Buttons from './pages/Buttons';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ccc',
    },
    secondary: red,
  },

  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Notes />
          </Route>
          <Route path='/text'>
            <Text />
          </Route>
          <Route exact path='/buttons'>
            <Buttons />
          </Route>
          <Route path='/form'>
            <Form />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

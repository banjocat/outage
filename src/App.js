import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CreateOutage from './routes/CreateOutage';
import {
      BrowserRouter as Router,
      Route
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <Router>
        <Route exact path="/" component={CreateOutage}/>
        </Router>
        </MuiThemeProvider>
    );
  }
}

export default App;

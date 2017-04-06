import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CreateOutage from './routes/CreateOutage';
import ListOutage from './routes/ListOutage';
import {
      BrowserRouter as Router,
      Route
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <Router>
                <div>
                    <Route exact path="/" component={ListOutage}/>
                    <Route path="/create" component={CreateOutage}/>
                </div>
            </Router>
        </MuiThemeProvider>
    );
  }
}

export default App;

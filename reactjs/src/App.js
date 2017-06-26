import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CreateOutage from './routes/CreateOutage';
import ListOutage from './routes/ListOutage';
import ViewOutage from './routes/ViewOutage';
import Login from './routes/Login';
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
                    <Route path="/edit/:_id" component={ViewOutage}/>
                    <Route path="/login" component={Login}/>
                </div>
            </Router>
        </MuiThemeProvider>
    );
  }
}

export default App;

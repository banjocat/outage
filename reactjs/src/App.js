import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CreateOutage from './routes/CreateOutage';
import ListOutage from './routes/ListOutage';
import ViewOutage from './routes/ViewOutage';
import Login from './routes/Login';
import {isLoggedIn} from './auth/LoggedIn';
import {
      BrowserRouter as Router,
      Route
} from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: true
        };
    }

    render() {
        if (this.state.loggedIn) {
            return (
                <MuiThemeProvider>
                    <Router>
                        <div>
                            <Route exact path="/" component={ListOutage} />
                            <Route path="/create" component={CreateOutage} />
                            <Route path="/edit/:_id" component={ViewOutage} />
                            <Route path="/login" component={Login}/>
                        </div>
                </Router>
            </MuiThemeProvider>
            );
        }
        return (
                <MuiThemeProvider>
                    <Router>
            <div>
                <Route path="/login" component={Login}/>
                <Route exact path="/" component={Login}/>
            </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}
export default App;

import React, {Component}  from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';

const express_host =  '127.0.0.1:4000';
const styles = {
  button: {
    marginLeft: '40%',
    marginBottom: '30%'
  },
  h1: {
    marginLeft: '30%',
    fontSize: '800%'
  }
};


class Login extends Component {
    handleLogin = () => {
        window.location.href=`http://${express_host}/auth/github`;
    }
    render() {
        return (
            <Paper zDepth={3} style={{padding: '2%'}}>
                <h1 style={styles.h1}>Outage</h1>
                <RaisedButton
                    onClick={this.handleLogin}
                    target="_blank"
                    label="Login with Github"
                    secondary={true}
                    style={styles.button}
                    icon={<FontIcon className="muidocs-icon-custom-github" />}
                />
            </Paper>
        );
    }
}

export default Login;


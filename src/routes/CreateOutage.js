import React, {Component}  from 'react';
import Dashboard from './shared/Dashboard';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class CreateOutage extends Component {
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    Form = () => {
        return (
        <div>
            <TextField
                name='title'
                hintText="Outage title"
                errorText='This field is required'
            />
            <br />
            <br />
            <TextField
                name='short'
                hintText="Outage short description"
                multiLine={true}
                errorText='This field is required'
            />
            <br />
        </div>
        );
    }

    render() {
        return (
            <div>
                <Dashboard />
                {this.Form()}
                <RaisedButton label='Send Outage' />
            </div>
        );
    }
}

export default CreateOutage;

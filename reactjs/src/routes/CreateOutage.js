import React, {Component}  from 'react';
import Dashboard from './shared/Dashboard';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import _ from 'lodash';


class CreateOutage extends Component {
    constructor(props) {
        super(props);
        // Eventually read from database
        this.state = {
            title: "",
            description: ""
        }
    }
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <Dashboard />
                <Paper zDepth={3} style={{padding: '2%'}}>
                    <form>
                        <TextField
                            name="Title"
                            hintText="Enter title of outage"
                        />
                        <br />
                        <br />
                        <br />
                        <TextField
                            name="Description"
                            hintText="Enter what is wrong"
                            multiLine="true"
                        />
                        <br />
                        <br />
                        <br />
                    </form>
                    <RaisedButton label='Send Outage' />
                </Paper>
            </div>
        );
    }
}

export default CreateOutage;

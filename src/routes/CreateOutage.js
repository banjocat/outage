import React, {Component}  from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dashboard from './shared/Dashboard';

class CreateOutage extends Component {
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <Dashboard />
                <RaisedButton label='Create Template' />
            </div>
        );
    }
}

export default CreateOutage;

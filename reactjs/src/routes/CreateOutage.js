import React, {Component}  from 'react';
import Dashboard from './shared/Dashboard';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import axios from 'axios';



const express_host =  '127.0.0.1:4000';
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

    handleDescritionChange = (event, newString) => {
        this.setState({description: newString});
    }
    handleTitleChange = (event, newString) => {
        this.setState({title: newString});
    }

    handleSaveOutage = (event) => {
        axios.post(`http://${express_host}/api/v1/outage`, {
            title: this.state.title,
            description: this.state.description
        }, {withCredentials: true})
            .then( (response) => {
                console.log('Saved');
                this.props.history.push('/');
            })
            .catch( (err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <Dashboard />
                <Paper zDepth={3} style={{padding: '2%'}}>
                    <form>
                        <TextField
                            name="Title"
                            onChange={this.handleTitleChange}
                            floatingLabelText="Title"
                        />
                        <br />
                        <br />
                        <br />
                        <TextField
                            name="Description"
                            multiLine={true}
                            onChange={this.handleDescritionChange}
                            floatingLabelText="Description"
                        />
                        <br />
                        <br />
                        <br />
                    </form>
                    <RaisedButton label='Send Outage' onClick={this.handleSaveOutage}/>
                </Paper>
            </div>
        );
    }
}

export default CreateOutage;

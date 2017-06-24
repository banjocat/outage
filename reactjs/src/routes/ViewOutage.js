import React, {Component}  from 'react';
import Dashboard from './shared/Dashboard';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import axios from 'axios';


const express_host = process.env.EXPRESS_HOST ? process.env.EXPRESS_HOST : 'localhost:3000';
class CreateOutage extends Component {
    constructor(props) {
        super(props);
        // Eventually read from database
        this.state = {
            title: "Pizza",
            description: "Pizza eater",
            status: "open"
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
        axios.put(`http://${express_host}/api/v1/outage`, {
            title: this.state.title,
            description: this.state.description
        })
            .then( (response) => {
                console.log('Saved');
            })
            .catch( (err) => {
                console.log(err);
            });
    }

    handleStatus = (event, index, value) => this.setState({status: value})
    handleDescritionChange = (event, index, value) => this.setState({description: value})

    render() {
        return (
            <div>
                <Dashboard />
                <Paper zDepth={3} style={{padding: '2%'}}>
                    <form>
                        <TextField
                            name="Title"
                            floatingLabelText="Title"
                            value={this.state.title}
                            onChange={this.handleChange}
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
                        <SelectField
                            floatingLabelText="Status"
                            value={this.state.status}
                            onChange={this.handleStatus}
                        >
                            <MenuItem value="open" primaryText="Open" /> 
                            <MenuItem value="progress" primaryText="In progress" /> 
                            <MenuItem value="closed" primaryText="Closed" /> 
                        </SelectField>
                        <br />
                        <br />
                        <br />
                    </form>
                    <RaisedButton label='Change Outage' onClick={this.handleSaveOutage}/>
                </Paper>
            </div>
        );
    }
}

export default CreateOutage;

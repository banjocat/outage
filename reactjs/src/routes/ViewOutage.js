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
        this.state = {
            _id: this.props.match.params._id,
            title: "",
            description: "",
            state: ""
        }
        console.log(this.state);
    }
    componentDidMount() {
        axios.get(`http://${express_host}/api/v1/outage/${this.state._id}`)
            .then(res => {
                const data = res.data[0];
                console.log(data);
                this.setState({title: data.title})
                this.setState({description: data.description})
                this.setState({state: data.state})
            });
    }

    handleSaveOutage = (event) => {
        console.log(this.state);
        axios.put(`http://${express_host}/api/v1/outage/${this.state._id}`, {
            description: this.state.description,
            state: this.state.state
        })
            .then( (response) => {
                console.log('Saved');
                this.props.history.push('/');
            })
            .catch( (err) => {
                console.log(err);
            });
    }

    handleStatus = (event, index, value) => this.setState({state: value})
    handleDescritionChange = (event, value) => this.setState({description: value})

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
                            value={this.state.description}
                            floatingLabelText="Description"
                        />
                        <br />
                        <br />
                        <br />
                        <SelectField
                            floatingLabelText="Status"
                            value={this.state.state}
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

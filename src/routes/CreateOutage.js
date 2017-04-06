import React, {Component}  from 'react';
import Dashboard from './shared/Dashboard';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class CreateOutage extends Component {
    constructor(props) {
        super(props);
        // Eventually read from database
        const templates = [
            {id: 1, name: 'Simple Outage', fields: [
                {id: 1, name: 'Outage Title', errorText: 'This field is required' },
                {id: 2, name: 'Outage Short Description', errorText: 'This field is required'},
            ]
            },
        ]
        this.state = {
            templates: templates,
            pickedTemplate: 1,
        }
    }
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    TemplatePicker = () => {
        const choices = this.state.templates.map( (template) => {
            return (
                <MenuItem key={template.id} primaryText={template.name} />
            )
        });
        return (
            <SelectField>
                {choices}
            </SelectField>
        )
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
                {this.TemplatePicker()}
                {this.Form()}
                <RaisedButton label='Send Outage' />
            </div>
        );
    }
}

export default CreateOutage;

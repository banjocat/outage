import React, {Component}  from 'react';
import Dashboard from './shared/Dashboard';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import _ from 'lodash';


class CreateOutage extends Component {
    constructor(props) {
        super(props);
        // Eventually read from database
        const templates = [
            {id: 1, name: 'Simple Outage', fields: [
                {id: 1, type: 'TextField',
                    name: 'title',
                    hintText: 'Outage Title',
                    errorText: 'This field is required'
                },
                {id: 2,
                    type: 'TextField',
                    name: 'short-descritpion',
                    multiLine: true,
                    hintText: 'Outage Short Description',
                    errorText: 'This field is required'
                },
            ]
            },
        ]
        this.state = {
            templates: templates,
            pickedTemplate: 0,
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

    DetermineComponent = (value) => {
        if (value.type === 'TextField') {
            return (
                <div key={value.id}>
                <TextField
                    key={value.id}
                    name={value.name}
                    hintText={value.hintText}
                    errorText={value.errorText}
                    multiLine={value.multiLine}
                />
                <br />
                <br />
            </div>
            );
        }
    }

    GetPickedTemplateFields = () => {
        // Default to first one
        let template = this.state.templates[0];
        _.each(this.state.templates, (item) => {
            if  item.id == this.state.pickedTemplate {
                template = item;
            }
        });
        return template;
    }

    Form = () => {
        const index = this.state.pickedTemplate;
        const jsx = _.map(this.state.templates[index]['fields'], (value) => {
            return this.DetermineComponent(value);
        });
        return (
            <div>
                {jsx}
            </div>
        );
    }

    render() {
        return (
            <div>
                <Dashboard />
                <Paper zDepth={3} style={{padding: '2%'}}>
                {this.TemplatePicker()}
                <form>
                    {this.Form()}
                </form>
                <RaisedButton label='Send Outage' />
            </Paper>
            </div>
        );
    }
}

export default CreateOutage;

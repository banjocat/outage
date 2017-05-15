import React, {Component}  from 'react';
import Dashboard from './shared/Dashboard';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
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
            {id: 2, name: 'Complex Outage', fields: [
                {id: 1,
                    type: 'TextField',
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
                {id: 3,
                    type: 'Choices',
                    name: 'Reporter',
                    choices: ['Jack', 'Cassie', 'Walter', 'Baby'],
                },
                {id: 4,
                    type: 'Checkbox',
                    name: 'Check box',
                    choices: ['Check1', 'Check2', 'Check3']
                },
            ]
            },
        ]
        this.state = {
            templates: templates,
            pickedTemplate: 2,
        }
    }
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    changeTemplate = (event, index, value) => {
        this.setState({'pickedTemplate': value});
    }
    TemplatePicker = () => {
        const chosenId = this.state.pickedTemplate;
        const choices = this.state.templates.map( (template) => {
            return (
                <MenuItem key={template.id} value={template.id} checked={chosenId === template.id} primaryText={template.name} />
            )
        });
        return (
            <SelectField floatingLabelText="Template" onChange={this.changeTemplate} value={chosenId} >
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
        else if (value.type === 'Choices') {
            const choices = _.map(value.choices, (choice, key) => {
                return (
                <div>
                <MenuItem key={key} value={choice} primaryText={choice} />
                <br />
                </div>
                )
            });
            return (
                <div>
                <SelectField key={value.id} floatingLabelText={value.name}  >
                    {choices}
                </SelectField>
                <br />
                </div>
            );
        }
        else if ( value.type === 'Checkbox' ) {
            const choices = _.map(value.choices, (choice, key) => {
                return (
                <Checkbox key={key} value={choice} label={choice} />
                )
            });
            return (
                <div>
                <SelectField key={value.id} floatingLabelText={value.name}  >
                    {choices}
                </SelectField>
                <br />
                </div>
            );
        }
    }

    GetPickedTemplateFields = () => {
        // Default to first one
        let index = _.findIndex(this.state.templates, (item) => {
            return (item.id === this.state.pickedTemplate);
        });
        return this.state.templates[index]['fields'];
    }

    Form = () => {
        const fields = this.GetPickedTemplateFields();
        const jsx = _.map(fields, (value) => {
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

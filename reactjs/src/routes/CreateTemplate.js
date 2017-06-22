import React, {Component}  from 'react';
import Dashboard from './shared/Dashboard';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import _ from 'lodash';

class CreateTemplate extends Component {
    constructor(props) {
        super(props);
        const possibleFields = [
            {
                type: 'TextField',
                options: {
                    multiLine: [true, false],
                },
            },
            {
                type: 'CheckBox',
                choices: [],


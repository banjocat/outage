import React, {Component}  from 'react';
import Dashboard from './shared/Dashboard';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import axios from 'axios';


const express_host =  'localhost:4000';
class ViewOutage extends Component {
    constructor(props) {
        super(props);
        // Eventually read from database
        const outages  = []
        this.state = {
            outages: outages
        };
    }

    componentDidMount() {
        axios.get(`http://${express_host}/api/v1/outage`)
            .then(res => {
                const outages = res.data;
                this.setState({outages: outages});
            });
    }


    Outages = () => {
        let handleClick = (_id) => {
            this.props.history.push(`/edit/${_id}`);
        }
        const outages = this.state.outages.map( (outage) => 
            <ListItem
                key={outage._id}
                primaryText={outage.title}
                secondaryText={outage.description}
                onClick={handleClick.bind(this, outage._id)}
            />
        );
        return (
            <List>
                {outages}
            </List>
        );
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <Dashboard />
                <Paper zDepth={3}>
                    {this.Outages()}
                </Paper>
            </div>

        );
    }
}

export default ViewOutage;

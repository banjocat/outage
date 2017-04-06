import React, {Component}  from 'react';
import Dashboard from './shared/Dashboard';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';


class ListOutage extends Component {
    constructor(props) {
        super(props);
        // Eventually read from database
        const outages = [
            {
                id: 1,
                name: 'Postgres is down',
                shortDescription: 'Postgres is down. Nick must of broke it',
            },
            {
                id: 2,
                name: 'Rabbitmq is broken',
                shortDescription: 'Help bugs bunny get his MQ back',
            },
            {
                id: 3,
                name: 'Comcast is broken',
                shortDescription: 'Jack went to Disney',
            },
        ];
        this.state = {
            outages: outages
        };
    }

    Outages = () => {
        const outages = this.state.outages.map( (outage) => 
            <ListItem
                key={outage.id}
                primaryText={outage.name}
                secondaryText={outage.shortDescription}
            />
        );
        return (
            <List>
                {outages}
            </List>
        );
    }

    componentDidMount() {
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

export default ListOutage;

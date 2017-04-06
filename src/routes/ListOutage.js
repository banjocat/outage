import React, {Component}  from 'react';
import Dashboard from './shared/Dashboard';
import {GridList, GridTile} from 'material-ui/GridList';

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
                shortDescription: 'Tell Tan to fix this please',
            },
        ];
        this.state = {
            outages: outages
        };
    }

    Outages = () => {
        const outages = this.state.outages.map( (outage) => 
            <GridTile
                key={outage.id}
                title={outage.name}
                subtitle={outage.shortDescription}
            />
        );
        return (outages);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <Dashboard />
                <GridList
                    cellHeight={180}
                >
                    {this.Outages()}
                </GridList>
            </div>

        );
    }
}

export default ListOutage;

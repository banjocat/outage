import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {NavLink} from 'react-router-dom';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    toggleMenu = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <Drawer open={this.state.open}>
                    <NavLink to='/'>
                        <MenuItem primaryText="View Outages" />
                    </NavLink>
                    <NavLink to='/create'>
                        <MenuItem primaryText="Add Outage" />
                    </NavLink>
                </Drawer>
                <AppBar
                    title='Outage'
                    onLeftIconButtonTouchTap={this.toggleMenu}
                />
            </div>
        );
    }
}

export default Dashboard;

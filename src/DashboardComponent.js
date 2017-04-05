import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }


    toggleMenu = () => this.setState({open: !this.state.open});
    menuOff = () => this.setSate({open: false});

    render() {
        return (
            <div>
            <Drawer onBlur={this.menuOff} open={this.state.open}>
            <MenuItem>Create</MenuItem>
            <MenuItem>Find</MenuItem>
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

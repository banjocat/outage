import React, {Component}  from 'react';
import Dashboard fromt './shared/Dashboard';

class  extends Component {
  constructor(props) {
    super(props);
      outages = [
          {
              name: 'Postgres is down',
          },
          {
              name: 'Rabbitmq is broken',
          }
      ];
      this.state.outages = outages;
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
        <div>
            <Dashboard />
        </div>
    
    );
  }
}

export default ;

import React from 'react';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="home-bg">
        <div>Employee Training</div>
        <div>logged in.</div>
        <div>(Should have different background for Home Page)</div>
      </div>
    );
  }
}

export default Home;
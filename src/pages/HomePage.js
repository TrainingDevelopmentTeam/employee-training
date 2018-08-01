import React from 'react';
import './page-style/HomePage.css';
import Navigation from '../components/Navigation';






class HomePage extends React.Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <div className="homepage-main">
        <Navigation />
      </div>
    );
  }
}

export default HomePage;


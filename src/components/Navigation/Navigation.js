import React from 'react';

const Navigation = ({ onRouteChange, isLoggedIn }) => {
    if (isLoggedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('logout')} className=''>Log Out</p>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('login')} className=''>Log In</p>
        </nav>
      );
    }
}

export default Navigation;
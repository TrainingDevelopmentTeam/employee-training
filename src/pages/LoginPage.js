import React from 'react';
import Login from '../components/Login/Login';



class LoginPage extends React.Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default LoginPage;
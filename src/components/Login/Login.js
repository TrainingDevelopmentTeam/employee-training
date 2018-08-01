import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

//// IMPORTANT: ///////////////////////////////////////////////////////////
// This credentials section is only temporary, until backend/auth is setup
const credentials = {
  email: "test@email.com",
  password: "password",
  fullName: "Test User"
}
//////////////////////////////////////////////////////////////////////////

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: '',
      loginPassword: ''
    }
  }



  render() {
    return (
        <article className="">
          <main className="">
            <div className="outerField">
              <fieldset id="" className="fieldArea">
                <legend class="legendArea">Employee Portal</legend>
                <div className= "loginArea">
                  <div className="loginInputLabel">Email</div>
                  <label className=""></label>
                  <input
                    className="loginInput"
                    type="email"
                    name="email-address"
                    id="email-address"
                  />
                  <div className="loginInputLabel">Password</div>
                  <label className="" htmlFor="password"></label>
                  <input
                    className="loginInput"
                    type="password"
                    name="password"
                    id="password"
                  />
                  <div>
                  <NavLink to="/home">
                    <input
                      className="loginButton"
                      type="submit"
                      value="Log in"
                    />
                    </NavLink>
                  </div>
                </div>
              </fieldset>
            </div>
          </main>
        </article>
    );
  }
}

export default Login;
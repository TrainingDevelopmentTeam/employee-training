import React from 'react';
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

  onEmailChange = (event) => {
    this.setState({loginEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({loginPassword: event.target.value})
  }

  onSubmitLogin = () => {
    if (credentials.email === this.state.loginEmail 
      && credentials.password === this.state.loginPassword) {
      this.props.onRouteChange('Home');
    }
  }

  render() {
    const { onRouteChange } = this.props;
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
                    onChange={this.onEmailChange}
                  />
                  <div className="loginInputLabel">Password</div>
                  <label className="" htmlFor="password"></label>
                  <input
                    className="loginInput"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                  <div>
                    <input
                      className="loginButton"
                      onClick={this.onSubmitLogin}
                      type="submit"
                      value="Log in"
                    />
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
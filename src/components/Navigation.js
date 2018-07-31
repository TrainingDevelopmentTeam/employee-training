import React, { Component } from 'react';
import '../styles/Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand " href="#">ETD</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link " href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Link</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link " href="#">Link</a>
                    </li>
                    </ul>
                    <div class="form-inline my-2 my-lg-0">
                        <ul className="navbar-nav" >
                            <li className="nav-item ">
                                 <a className="nav-link " href="#">Settings</a>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
      </div>
    );
  }
}

export default Navigation;

import React, { Component } from "react";
import "./Styles/Google.css";

import "firebase/auth";
import { Link } from "react-router-dom";

class Google extends Component {
  _isMounted = false;
  constructor() {
    super();
  }
  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        <Link className="SignOut button3" onClick={this.props.boton} to="/">
          SALIR
        </Link>
      </div>
    );
  }
}

export default Google;

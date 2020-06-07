import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Styles/Run.css";

class Run extends Component {
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
      <div className="inicio">
        <h1 className="ingreso">Bienvenid@, por favor ingrese..</h1>

        <Link className="Link" type="submit" to="/Login">
          INICIAR
        </Link>
      </div>
    );
  }
}

export default Run;

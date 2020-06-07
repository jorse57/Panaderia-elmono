import React, { Component } from "react";
// import {useState} from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Styles/Login.css";
import * as firebase from "firebase/app";
import withFirebaseAuth from "react-with-firebase-auth";
import "firebase/auth";
import firebaseConfig from "../firebase";

import Google from "./LoginGoogle";
import { Link } from "react-router-dom";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

class Login extends Component {
  _isMounted = false;
  constructor() {
    super();

    this.state = {
      user: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const email = document.getElementById("txtEmail").value;
    const password = document.getElementById("txtPassword").value;
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.then((i) => {
      if (i.user) {
        this.setState({
          user: true,
        });
      }
    });
    promise.catch((m) => console.log(m));
    // console.log(this.state)
  };
  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        console.log(firebaseUser.displayName);
      } else {
        console.log("no loged");
      }
    });

    return (
      <div>
        {user ? (
          <Google boton={signOut} />
        ) : (
          <div className="principal">
            <div className="wrapper fadeInDown">
              <div className="Login ">
                <form onSubmit={this.handleSubmit}>
                  <input
                    id="txtEmail"
                    className="caja"
                    type="email"
                    placeholder="Email"
                  />

                  <input
                    id="txtPassword"
                    className="caja"
                    type="password"
                    placeholder="Contraseña"
                  />

                  <Button id="btnLogin" className="fadeIn fourth" type="submit">
                    LOGIN
                  </Button>
                </form>
              </div>
              <div>
                {user ? (
                  <button className="SignOut button3" onClick={signOut}>
                    SALIR
                  </button>
                ) : (
                  <button className="SignIn button1" onClick={signInWithGoogle}>
                    INGRESAR CON SU CUENTA GOOGLE
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);

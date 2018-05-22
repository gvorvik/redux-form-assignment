import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import SnackInput from '../snackInput/snackInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello App</h1>
        <SnackInput />
      </div>
    );
  }
}

export default connect()(App);

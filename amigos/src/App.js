import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getFriends } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Amigos App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Friends List here</h1>
        <hr/>


      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    friends: state.friendGetter.friends,
    fetching: state.friendGetter.fetching,
    error: state.friendGetter.error
  }
}

export default connect(mapStateToProps, { getFriends})(App);

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendForm from './components/FriendForm.js'
import { getFriends } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    console.log(this.props.friends)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Amigos App</h1>
        </header>

        <h2>FriendsForm Component</h2>
        <FriendForm />
        <hr/>
        <h2>FriendsList Component</h2>
        <p>List Here</p>
        <hr/>
        {this.props.fetching ? (<img src={logo} className="App-logo" alt="logo" />) :
                               (<ul>
                                 {this.props.friends.map(friend => {
                                    return <li className="Friend-Container" key={friend.name}>Name: {friend.name} Email: {friend.email} Age: {friend.age}</li>;
                                 })}
                               </ul>
                              )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  // const { friendGetter } = state
  return {
    friends: state.friendsReducer.friends,
    fetching: state.friendsReducer.fetching,
    error: state.friendsReducer.error,
    saving: state.friendsReducer.saving,
    saved: state.friendsReducer.saved
  }
}

export default connect(mapStateToProps, { getFriends })(App);

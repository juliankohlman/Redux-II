import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions'

class FriendForm extends Component {
  // form state
  state = {
    name: '',
    age: '',
    email: ''
  };

  // handle input change method (INPUT FIELDS)

  // handle submit (add friend) method (BUTTON)

  render() {
    return (
      <div><p>Form Here</p></div>
    );
  }
}
  // const mapStateToProps
const mapStateToProps = state => {
    console.log(state);
    return {
      error: state.error,
      addFriend: state.addFriend
    };
};


// export default connect()
export default connect(mapStateToProps, { addFriend })(FriendForm);
// export default Friendform;
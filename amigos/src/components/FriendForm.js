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

  // handle submit (add friend) method (BUTTON)
  handleSubmit = e => {
    const { name, age, email } = this.state
    this.props.addFriend({ name, age, email })
    console.log('a new friend was added', this.state);
    this.setState({ name: '', age: '', email: ''});
    // e.preventDefault();
  };

  // handle input change method (INPUT FIELDS)
  handleInput = e => {
    this.setState({[e.target.name]: e.target.value });
  };


  render() {
    return (
      <div><p>Form Here</p>
        <form>
          <label htmlFor="">
          <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleInput}/>
          </label>
          <label htmlFor="">
          <input type="number" placeholder="Age" name="age" value={this.state.age} onChange={this.handleInput}/>
          </label>
          <label htmlFor="">
          <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleInput}/>
          </label>
        <button type="button" onClick={() => this.handleSubmit()}>Add Amigo</button>{/* add a buttonOnClick listener and link up to handlesubmit*/}
        </form>
      </div>
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
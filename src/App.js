import React from 'react';
import { connect } from "react-redux";
import { addUser, removeUser } from "./actions";
import UserRow from "./components/UserRow";

class App extends React.Component {
  
  addUser = (e) => {
    e.preventDefault();
    this.props.addUser(this.refs.username.value);
    this.refs.username.value = '';
  };

  createUserRow = (user) => (<UserRow  key={user.id} user={user} removeUser={this.props.removeUser} />);

  render() {
    let { users } = this.props;
    return (
      <div>
        Hello,
        <form action="#" onSubmit={this.addUser}>
          <label>Add a user </label>
          <input type="text" ref="username" />
          <button type="submit">+</button>
        </form>
        { users.map(this.createUserRow) }
      </div>
    );    
  }
}

const mapState = (state) => ({ users: state.users });

const mapDispatch = { addUser, removeUser };

export default connect(mapState, mapDispatch)(App);

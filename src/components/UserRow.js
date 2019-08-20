import React from "react";

export default class UserRow extends React.Component {

    removeUser = () => this.props.removeUser(this.props.user.id);
  
    render() {
      let { user } = this.props;
      return (
        <div>
          {user.name}
          <button data-id={user.id} onClick={this.removeUser}>X</button>
        </div>
      );
    }
}
  
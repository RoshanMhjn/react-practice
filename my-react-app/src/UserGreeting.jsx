import React from "react";

const UserGreeting = (props) => {
  return props.isLoggedIn ? (
    <h2>Welcome {props.username}</h2>
  ) : (
    <h2>Login First</h2>
  );
};

export default UserGreeting;

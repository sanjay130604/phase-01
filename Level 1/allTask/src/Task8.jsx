import React from "react";

const UserRoleMessage = ({ role }) => {
  return (
    <div>
      {role === "admin" ? (
        <h2>Welcome, Admin! You have full access.</h2>
      ) : role === "user" ? (
        <h2>Welcome, User! You have limited access.</h2>
      ) : (
        <h2>Welcome, Guest! Please log in.</h2>
      )}
    </div>
  );
};

export default UserRoleMessage;

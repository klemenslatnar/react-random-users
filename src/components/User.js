import React from "react";

import classes from "./User.module.css";

function User(props) {
  return (
    <div>
      {props.users.map((user) => {
        return (
          <div key={user.id} className={classes.user}>
            <img src={user.image} alt="random person" />
            <p>{user.name}</p>
            <p>{user.gender}</p>
            <p>{user.country}</p>
          </div>
        );
      })}
    </div>
  );
}

export default User;

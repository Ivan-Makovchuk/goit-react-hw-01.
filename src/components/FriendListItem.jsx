import React from "react";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div>
    <img src={avatar} alt="Avatar" width="48" />
    <p>{name}</p>
    <p style={{ color: isOnline ? "green" : "red" }}>
      {isOnline ? "Online" : "Offline"}
    </p>
  </div>
);

export default FriendListItem;
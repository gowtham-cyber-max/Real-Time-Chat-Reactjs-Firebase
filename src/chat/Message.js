import React from 'react';
import { auth } from "./Fire_Base";
import { useAuthState } from "react-firebase-hooks/auth";
import './Chat.css';



function Message({message}) {
    const [user]=useAuthState(auth);
  return (
    <div className='msg'>

    <div className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
    {message.uid === user.uid ? "right" : "left"}
    {/* {message.uid}
    <break></break>
    {user.uid} */}
    <img
      className="logo"
      src={message.avatar}
      alt="user avatar"
    />
    <div className="chat-bubble__right">
      <p className="user-name">{message.name}</p>
      <p className="user-message">{message.text}</p>
    </div>
  </div>
    </div>
);
}

export default Message
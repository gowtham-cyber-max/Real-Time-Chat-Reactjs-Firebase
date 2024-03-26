import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import React from 'react'
import NavBar from './NavBar'
import Welcome from "./Welcome";
import ChatBox from "./ChatBox";

function Chat_app() {
    const [user] = useAuthState(auth);
  return (
    <div>
        <NavBar/>
        {!user ?<Welcome/>:<ChatBox/>}
    </div>
  )
};

export default Chat_app;
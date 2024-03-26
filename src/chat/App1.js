import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import React from 'react'
import NavBar from './NavBar'
import Welcome from "./Welcome";
import ChatBox from "./ChatBox";

function App1() {
    const [user] = useAuthState(auth);
  return (
    <div>
        <NavBar/>
        {!user ?<Welcome/>:<ChatBox/>}
    </div>
  )
};

export default App1;
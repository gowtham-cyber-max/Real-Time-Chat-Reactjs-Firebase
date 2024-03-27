import { auth } from "./Fire_Base";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from 'react';

function Welcome() {
    const gogleSignIn=()=>{
        const provider=new GoogleAuthProvider();
        signInWithRedirect(auth,provider);
    };
  return (
    <div>
        <h2>Welcome to chat</h2>
        <button onClick={gogleSignIn}>SignIn</button>
    </div>
  )
}

export default Welcome
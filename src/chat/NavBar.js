import React from 'react';
import { auth } from "./Fire_Base";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
function NavBar() {
    const [user_bool]=useAuthState(auth);
    const SignIn=()=>{
       const provider = new GoogleAuthProvider();
       signInWithRedirect(auth,provider);
    };
    const SignOut=()=>{
        auth.signOut();
    };
  return (
    <nav className="nav-bar">
        <h1>Chat</h1>
        {
            user_bool?(
                <button onClick={SignOut} className="sign-out" type="button">Sign Out</button>
                )
                :
                (
                    <button className="sign-in" onClick={SignIn}>SignIn</button>
                )
        }
    </nav>
  )
}

export default NavBar;
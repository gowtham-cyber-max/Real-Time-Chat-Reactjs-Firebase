import { auth, db } from "./Fire_Base";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from 'react';

function SendMessage({scroll}) {
    const [message,setMessage]=useState("");
    const HandleChange=(event)=>{
        setMessage(event.target.value);
    };
    const sendMsg=async (event)=>{
        event.preventDefault();
        if(message.trim()===""){
            alert("Enter a message please");
            return;
        }
        console.log(auth.currentUser)
        const uid=auth.currentUser["uid"];
        const displayName = auth.currentUser["displayName"];
        const img_url = auth.currentUser["photoURL"]
        await addDoc(collection(db,"messages"),{
            text:message,
            name:displayName,
            avatar:img_url,
            createAt:serverTimestamp(),
            uid:uid,
        })
        setMessage("");
        scroll.current.scrollIntoView({behavior:"smooth"});

    };
  return (
    <form onSubmit={(event)=>sendMsg(event)}>
        <input type='text' placeholder='Enter a message' value={message} onChange={HandleChange}/>
        <button type='submit' >Send</button>
    </form>
  );
};

export default SendMessage;
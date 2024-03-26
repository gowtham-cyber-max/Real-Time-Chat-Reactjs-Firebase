import { auth, db } from "../firebase";
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
        const {uid,displayName,img_url}=auth.currentuser;
        await addDoc(collection(db,"messages"),{
            text:message,
            name:displayName,
            avatar:img_url,
            createAt:serverTimestamp(),
            uid,
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
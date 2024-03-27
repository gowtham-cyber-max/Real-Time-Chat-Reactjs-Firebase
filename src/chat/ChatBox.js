import React, { useEffect, useRef, useState } from 'react';
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit,
    QuerySnapshot
  } from "firebase/firestore";
  import { db } from './Fire_Base';
  import Message from './Message';
  import SendMessage from './SendMessage';


  
function ChatBox() {
    const [messages,setMessages]=useState([]);
    const scroll=useRef();
    useEffect(()=>{
        const q = query(
            collection(db,"messages"),
            orderBy("createAt","desc"),
            limit(50)
        );
        const unsubscribe=onSnapshot(q,(QuerySnapshot)=>{
            const fetchedMessages=[];
            console.log(QuerySnapshot);
            QuerySnapshot.forEach((doc)=>{
                fetchedMessages.push({ ...doc.data() ,  id: doc.id });
            });
            

            const sortedMessages = fetchedMessages.sort(
                (a,b) => a.createAt - b.createAt
            );
            setMessages(sortedMessages);
            
        });
        return()=>unsubscribe;
    },[])
  return (
    <div>
        {messages?.map((message)=>(
            <Message key={message.id} message={message}/>
        ))}
        <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </div>
  )
}

export default ChatBox;
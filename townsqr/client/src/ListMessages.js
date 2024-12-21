// src/MessageList.js
import React, { Fragment, useEffect,useState } from 'react';
import './App.css';
import './ListMessages.css';

const ListMessages = () => {

  const [chat, setChat] = useState([]);

  const getMessages = async () => {
    try {
      const  response = await fetch("http://localhost:5000/chat/")
      const jsonData = await response.json();
      setChat(jsonData);
    
    } catch (err) {
      console.log(err.message)
    }
  }

useEffect(() =>{
  getMessages();
},[]);

console.log(chat);
  return <Fragment>
    {chat.slice().reverse().map((message, index) => ( 
      <p class="bubble-text" key={index}>{message.message}</p> 
      ))}
  </Fragment>
};

export default ListMessages;

// src/MessageInput.js
import React, { Fragment, useState } from 'react';
import './MessageInput.css';

const MessageInput = () => {

  const [message, setMessage] = useState("")
 
  const onSubmitForm = async e =>{
    e.preventDefault();
    try {
      const body = { message };
      const response = await fetch("http://localhost:5000/chat/",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      window.location ="/";
      console.log(response);
    } catch (err) {
      console.error(err.message);      
    }
  };

  return (
    <Fragment>
    <div className="message-input-container">
      <form onSubmit={onSubmitForm}>
      <input type="text" placeholder="Type your message..." onChange={e => setMessage(e.target.value)}/>
      <button>Send</button>
      </form>
    </div>
    </Fragment>
  );
};

export default MessageInput;

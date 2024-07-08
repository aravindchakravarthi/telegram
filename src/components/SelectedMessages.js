import React from 'react';
import "../stylesheets/SelectedMessages.css"
import { FaArrowLeftLong } from "react-icons/fa6";


const SelectedMessages = ({ selectedChatMessages, handleBackToChats, name }) => {
  const unknown = "Unknown"
  return (
    <div className="messages-list">

      <h2 className='name'>      
        <button className='back' onClick={handleBackToChats}><FaArrowLeftLong /></button>
        {name || unknown}
      </h2>
      <div className='message-bg'>
        {selectedChatMessages.map(message => (
          <div key={message.id} className='message'>
            <p className='updated-msg'>{message.message}
              <div className='updated'>{message.updated_at.slice(11, 16)}</div>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedMessages;

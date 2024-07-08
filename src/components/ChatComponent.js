import React from 'react';
import "../stylesheets/ChatComponent.css"

const ChatComponent = ({ chats, fetchMessagesForChat }) => {
  const unknown = 'Unknown';
  return (
    <>
      <h2 className='chats'>Chats</h2>
      <div className="chats-list">
        {chats.map(chat => (
          <div key={chat.id} className='chat'>
            <div className='list'>
              <div className='profile'>{chat.creator.name ? chat.creator.name.slice(0,2) :unknown.slice(0,1)}</div>
              <strong onClick={() => fetchMessagesForChat(chat.id, chat.creator.name)}>{chat.creator.name || unknown}</strong>
              <div className='msg-count'>{chat.msg_count}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChatComponent;

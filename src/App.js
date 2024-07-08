import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";
import SideBar from './SideBar';
import ChatComponent from './components/ChatComponent';
import SelectedMessages from './components/SelectedMessages';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";

const App = () => {
  const [chats, setChats] = useState([]);
  const [selectedChatMessages, setSelectedChatMessages] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null); 
  const [name, setName] = useState();
  const [burger, setBurger] = useState(false);

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    try {
      const response = await axios.get(`https://devapi.beyondchats.com/api/get_all_chats?page=1`);
      if (response.data.status === 'success') {
        setChats(response.data.data.data);
      } else {
        console.error('Failed to fetch chats:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };

  const fetchMessagesForChat = async (chatId, name) => {
    try {
      const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
      if (response.data.status === 'success') {
        setSelectedChatMessages(response.data.data);
        setSelectedChatId(chatId); 
        setName(name);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleBackToChats = () => {
    setSelectedChatId(null); 
    setSelectedChatMessages([]); 
  };

  const toggleBurger = () => {
    setBurger(true);
    console.log(burger);
  };

  return (
    <div className='App'>
      <div className='df header'>
        <div className='df litem'>
          <div onClick={() => toggleBurger()}><GiHamburgerMenu className='hamburger' /></div>
          <div className='tele'><h2>Telegram</h2></div>
        </div>
        <div><IoSearch className='search' /></div>
      </div>
      {burger ? <SideBar onClose={() => setBurger(false)} /> : null}
      <div className="chat-container">
        {!selectedChatId ? (
          <ChatComponent chats={chats} fetchMessagesForChat={fetchMessagesForChat} />
        ) : (
          <SelectedMessages
            name={name}
            selectedChatMessages={selectedChatMessages}
            handleBackToChats={handleBackToChats}
          />
        )}
      </div>
    </div>
  );
};

export default App;

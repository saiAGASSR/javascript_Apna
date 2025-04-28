'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';
import { SuggestionButtons } from './SuggestionButtons';
import { responseObject } from './responseObject';
import ChatHeader from './ChatHeader';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import Avatar from '@mui/material/Avatar';


export default function ChatbotUI() {
  const [sessionId, setSessionId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: (
      <>
        <div>
          <div className='flex row'>
            
          
          <span className="font-bold text-base">
            Hey Buddy        
           
          </span>
          <Avatar
              alt='you'
              src='https://i.imgur.com/yoUqYf3.png'
              sx={{ width: 32, height: 32 }}
            /> 
          </div>
          <span className="text-sm text-gray-600">
            I can help you find movies, TV series, and live channels based on your preferences or searches.
          </span>
        </div>
      </>
    )}
  ]);
  const user_id = 13;
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const response = responseObject;

  const fetchBotResponse = async (userInput) => {
    const body = {
      userid: `${user_id}`,
      session_id: sessionId,
      user_message: userInput
    };
    console.log("body in request", body);

    try {
      const response = await axios.post("http://192.168.141.131:8000/chat", body);
      return response.data;
    } catch (error) {
      console.error("Error in chat request", error);
      return {
        Bot_Response: "Sorry, something went wrong.",
        Carousel_Results: [],
        Search_Suggestions: []
      };
    }
  };

  const sendMessage = async (messageText = input) => {
    if (!messageText.trim()) return;

    // Add user message
    const newMessage = { from: 'user', text: messageText };
    setMessages((prev) => [...prev, newMessage]);
    setInput(''); // Clear the input field

    // Set bot typing animation
    setIsTyping(true);

    // Fetch bot reply (assuming this fetches the bot response)
    const botReply = await fetchBotResponse(messageText);
    console.log('Bot reply:', botReply);

    setIsTyping(false);

    // Check if we have suggestions in the previous message and remove them
    setMessages((prev) => {
      const updated = [...prev];

      // If the last bot message contains suggestions, remove them
      const lastBotMsgIndex = [...updated].reverse().findIndex(msg => msg.from === 'bot' && msg.suggestions);
      if (lastBotMsgIndex !== -1) {
        const realIndex = updated.length - 1 - lastBotMsgIndex;
        updated[realIndex] = { ...updated[realIndex], suggestions: [] }; // Remove suggestions
      }

      // Add the new bot message with carousel and suggestions (if any)
      return [...updated, { from: 'bot', carousel_results: botReply.Carousel_Results, text: botReply.Bot_Response, suggestions: botReply.Search_Suggestions }];
    });

    console.log("new messages", messages);
  };

  useEffect(() => {
    // Ensure sessionId is set only on the client side
    if (typeof window !== 'undefined') {
      console.log("Setting session ID...");
      const existingSessionId = sessionStorage.getItem('sessionId');
      console.log('Existing session ID:', existingSessionId);

      if (!existingSessionId) {
        const newSessionId = uuidv4();
        console.log("New session ID:", newSessionId);
        sessionStorage.setItem('sessionId', newSessionId);
        setSessionId(newSessionId);
      } else {
        console.log("Using existing session ID");
        setSessionId(existingSessionId);
      }
    }
  }, []);

  useEffect(() => {
    const fetchInitialBotMessage = async () => {
      if (!sessionId) return; // Prevent request if session ID is not available yet
      const botReply = await fetchBotResponse(`My user id is ${user_id}`);
      console.log('Initial Bot reply:', botReply);

      setMessages((prev) => [
        ...prev,
        {
          from: 'bot',
          carousel_results: botReply.Carousel_Results,
          text: botReply.Bot_Response,
          suggestions: botReply.Search_Suggestions
        }
      ]);
    };

    fetchInitialBotMessage();
  }, [sessionId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-3 rounded-full shadow-xl hover:from-blue-700 hover:to-indigo-700 z-50"
          >
            💬
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 right-0 md:bottom-4 md:right-4 w-full md:w-100 h-full md:max-h-[90vh] bg-white rounded-none md:rounded-2xl shadow-lg flex flex-col overflow-hidden border border-gray-200 z-50"
          >

            {/* Header */}
            <ChatHeader setIsOpen={setIsOpen} />


            {/* Messages */}
            <MessageList
              messages={messages}
              isTyping={isTyping}
              messagesEndRef={messagesEndRef}
              setInput={setInput}
              sendMessage={sendMessage}
            />

            {/* Input */}
            <ChatInput
              input={input}
              setInput={setInput}
              sendMessage={sendMessage}
              isTyping={isTyping}
            />

            {/* Footer Note */}
            <p className="text-xs text-gray-400 text-center p-2 border-t border-gray-200 bg-white">
              ⚠️ AI chat may produce inaccurate results. Don't share personal info.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

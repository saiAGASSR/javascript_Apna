'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';
import { SuggestionButtons } from './SuggestionButtons';

export default function ChatbotUI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi How can I assist you today ?'},


  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const fetchBotResponse = async (userInput) => {
    // Simulate delay like typing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return `You said: "${userInput}".`;
  };

  const sendMessage = async (messageText = input) => {
    if (!messageText.trim()) return;

    const newMessage = { from: 'user', text: messageText };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');
    
    setIsTyping(true);
    const botReply = await fetchBotResponse(messageText);
    setIsTyping(false);

    setMessages((prev) => [...prev, { from: 'bot', text: botReply }]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <>
      {/* Floating open button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 z-50"
          >
            💬
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chatbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 w-80 max-h-[80vh] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden border border-gray-200 z-50"
          >
            <div className="bg-blue-600 text-white text-lg font-semibold p-4 flex justify-between items-center">
              Reco Bot
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-xl font-bold"
              >
                ×
              </button>
            </div>

            <MessageList
              messages={messages}
              isTyping={isTyping}
              messagesEndRef={messagesEndRef}
            />

            {messages.length === 1 && !isTyping && (
              <SuggestionButtons onSelect={(suggestion) => {
                setInput(suggestion);
                setTimeout(() => {
                  sendMessage(suggestion); // pass suggestion directly
                }, 100); // mimic user typing delay
              }} />
            )}


            <ChatInput
              input={input}
              setInput={setInput}
              sendMessage={sendMessage}
              isTyping={isTyping}
            />
            
            <p className="text-xs text-gray-400 text-center p-2 border-t border-gray-200 bg-white">
              ⚠️ AI chat may produce inaccurate results. Don't share personal info.
            </p>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
